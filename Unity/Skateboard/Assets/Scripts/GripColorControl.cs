using UnityEngine;
using System.Collections;

public class GripColorControl : MonoBehaviour {

	private ColorControl colorControl;

	void Awake () {
		colorControl = new ColorControl ();
	}
	
	void ChangeColor (string color) {
		colorControl.ChangeColor (gameObject, color);
	}

}
