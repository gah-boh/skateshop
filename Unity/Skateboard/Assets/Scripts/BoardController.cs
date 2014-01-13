using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class BoardController : MonoBehaviour {

	public Transform tailBend1;
	public Transform tailBend2;
	public Transform noseBend1;
	public Transform noseBend2;
	public Transform tailShapeLeft;
	public Transform tailShapeRight;
	public Transform noseShapeLeft;
	public Transform noseShapeRight;
	public Transform tailLength;
	public Transform noseLength;
	public Transform tailTruckLeft;
	public Transform tailTruckRight;
	public Transform noseTruckLeft;
	public Transform noseTruckRight;

	private Vector3 tailLengthZero;
	private Vector3 noseLengthZero;

	private Wheels streetWheels;
	private Wheels mediumWheels;
	private Wheels largeWheels;

	// Use this for initialization
	void Awake () {
		tailLengthZero = new Vector3(tailLength.localPosition.x, tailLength.localPosition.y, tailLength.localPosition.z);
		noseLengthZero = new Vector3(noseLength.localPosition.x, noseLength.localPosition.y, noseLength.localPosition.z);
		WheelsFactory wheelsFactory = new WheelsFactory ();
		streetWheels = wheelsFactory.CreateStreetWheels ();
		mediumWheels = wheelsFactory.CreateMediumWheels ();
		largeWheels = wheelsFactory.CreateLargeWheels ();
	}

	void Start() {
		ConnectAllWheels ();
		HideWheels (mediumWheels);
		HideWheels (largeWheels);
	}

	void ConnectAllWheels() {
		Wheels[] wheels = {streetWheels, mediumWheels, largeWheels};
		foreach( Wheels wheel in wheels) {
			wheel.noseL.transform.parent = noseTruckLeft;
			wheel.noseR.transform.parent = noseTruckRight;
			wheel.tailL.transform.parent = tailTruckLeft;
			wheel.tailR.transform.parent = tailTruckRight;
		}
	}

	void HideWheels (Wheels wheels) {
		showHideChildrenMesh (wheels.noseL, false);
		showHideChildrenMesh (wheels.noseR, false);
		showHideChildrenMesh (wheels.tailL, false);
		showHideChildrenMesh (wheels.tailR, false);
	}

	void showHideChildrenMesh (GameObject parent, bool isVisible) {
		MeshFilter[] meshes = parent.GetComponentsInChildren<MeshFilter>();
		foreach (MeshFilter mesh in meshes) {
			mesh.renderer.enabled = isVisible;
		}
	}

	void ShowWheels (Wheels wheels) {
		showHideChildrenMesh (wheels.noseL, true);
		showHideChildrenMesh (wheels.noseR, true);
		showHideChildrenMesh (wheels.tailL, true);
		showHideChildrenMesh (wheels.tailR, true);
	}

	void ChangeWheels (string wheels) {
		if (wheels == "small") {
			ShowWheels (streetWheels);
			HideWheels (mediumWheels);
			HideWheels (largeWheels);
		}
		else if (wheels == "medium") {
			ShowWheels (mediumWheels);
			HideWheels (streetWheels);
			HideWheels (largeWheels);
		}
		else if (wheels == "large") {
			ShowWheels (largeWheels);
			HideWheels (streetWheels);
			HideWheels (mediumWheels);
		}
	}

	void BendTail(float bendValue) {
		bendValue = bendValue * -1f;
		Bend (tailBend1, tailBend2, bendValue);
	}

	void BendNose(float bendValue) {
		bendValue = bendValue * -1f;
		Bend (noseBend1, noseBend2, bendValue);
	}

	
	private void Bend(Transform bend1, Transform bend2, float bendValue) {
		bend1.localEulerAngles = new Vector3 (bendValue, bend1.localEulerAngles.y, bend1.localEulerAngles.z);
		bend2.localEulerAngles = new Vector3 (bendValue*0.25f, bend2.localEulerAngles.y, bend2.localEulerAngles.z);
	}

	void TailShape(float shapeValue) {
		Vector3 tailCenterShape = new Vector3 (1.0f, 1.0f, TailCenterRemap(shapeValue));
		tailBend2.localScale = tailCenterShape;
		if (shapeValue >= 0) {
			tailShapeLeft.localScale = new Vector3(1f, 1f, 1f);
			tailShapeRight.localScale = new Vector3(1f, 1f, 1f);
		}
		else if (shapeValue < 0){
			MakePintail(shapeValue);
		}
	}

	private float TailCenterRemap(float tailCenterValue){
		// This is assuming the max slider value is 50 and that is what
		// we want to normalize to 1. Maybe this should go in the front end?
		// low2 + (value - low1) * (high2 - low2) / (high1 - low1)
		return (0.6f + (tailCenterValue - 0f) * (1.0f - 0.6f) / (50f - 0f));
	}

	private void MakePintail(float shapeValue) {
		tailShapeLeft.localScale = new Vector3 (1f, 1f, TailPinRemap(shapeValue));
		tailShapeRight.localScale = new Vector3 (1f, 1f, TailPinRemap(shapeValue));
	}

	private float TailPinRemap(float shapeValue) {
		// This is assuming the max slider value is 50 and that is what
		// we want to normalize to 1. Maybe this should go in the front end?
		// low2 + (value - low1) * (high2 - low2) / (high1 - low1)
		return (1.0f + (shapeValue - 0.0f) * (1.4f - 1.0f) / (-50f - 0f));
	}

	void NoseShape(float shapeValue) {
		float newShapeValue = NoseShapeRemap (shapeValue);
		noseShapeLeft.localScale = new Vector3 (noseShapeLeft.localScale.x, noseShapeLeft.localScale.y, newShapeValue);
		noseShapeRight.localScale = new Vector3 (noseShapeRight.localScale.x, noseShapeRight.localScale.y, newShapeValue);
//		Vector3 transformedScale = new Vector3 (noseBend2.localScale.x, noseBend2.localScale.y, NoseShapeRemap(shapeValue));
//		noseBend2.localScale = transformedScale;
	}

	private float NoseShapeRemap(float shapeValue) {
		// This is assuming the max slider value is 50 and that is what
		// we want to normalize to 1. Maybe this should go in the front end?
		// low2 + (value - low1) * (high2 - low2) / (high1 - low1)
		return (1.0f + (shapeValue - 0.0f) * (0.5f - 1.0f) / (50f - 0f));
	}

	void BoardLength(float length) {
		float newTailLength = (length - 30f) * 0.025f / 4 + tailLengthZero.z;
		float newNoseLength = (length - 30f) * 0.025f / 4 + noseLengthZero.z;
		tailLength.localPosition = new Vector3 (tailLength.localPosition.x, 
		                                        tailLength.localPosition.y, 
		                                        newTailLength);
		noseLength.localPosition = new Vector3 (noseLength.localPosition.x, 
		                                        noseLength.localPosition.y, 
		                                        newNoseLength);
	}

}
