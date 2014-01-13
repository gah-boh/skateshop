using UnityEngine;
using System.Collections;

public class GripColorControl : MonoBehaviour {

	private ColorControl colorControl;

	void Awake () {
		colorControl = gameObject.AddComponent("ColorControl") as ColorControl;
	}
	
	void ChangeColor (string color) {
		colorControl.ChangeColor (gameObject, color);
	}

}
