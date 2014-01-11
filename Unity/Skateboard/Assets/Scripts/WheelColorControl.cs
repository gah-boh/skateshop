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
	
	void ChangeWheelColor (string color) {
		colorControl.ChangeColor (wheel, color);
	}
}
