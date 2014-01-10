using System;
using System.Linq;
using UnityEngine;
using System.Collections;

public class ColorControl : MonoBehaviour {

	public void ChangeColor(GameObject targetGameObject, string colorString) {
		Material mat = targetGameObject.renderer.material;
		float[] color = colorString.Split (',').Select (x => float.Parse (x)).ToArray ();
		mat.SetColor ("_Color", new Color(color[0], color[1], color[2]));
	}
}
