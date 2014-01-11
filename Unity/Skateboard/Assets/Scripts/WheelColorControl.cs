using UnityEngine;
using System.Collections;

public class WheelColorControl : MonoBehaviour {

	private GameObject[] wheels;
	private ColorControl colorControl;
	
	void Awake () {
		wheels = GameObject.FindGameObjectsWithTag ("WheelMesh");
		colorControl = new ColorControl ();
	}
	
	void ChangeWheelsColor (string color) {
		foreach (GameObject wheel in wheels) {
			colorControl.ChangeColor (wheel, color);		
		}
	}
}
