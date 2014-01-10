using UnityEngine;
using System.Collections;

public class WheelColorControl : MonoBehaviour {

	private GameObject wheel;
	private ColorControl colorControl;

	// Use this for initialization
	void Start () {
		wheel = GameObject.FindGameObjectWithTag ("WheelMesh");
		colorControl = new ColorControl ();
	}
	
	void ChangeColor (string color) {
		colorControl.ChangeColor (wheel, color);
	}
}
