using UnityEngine;
using System.Collections;

public class GripColorControl : MonoBehaviour {

	private ColorControl colorControl;
	
	// Use this for initialization
	void Start () {
		colorControl = new ColorControl ();
	}
	
	void ChangeColor (string color) {
		colorControl.ChangeColor (gameObject, color);
	}

}
