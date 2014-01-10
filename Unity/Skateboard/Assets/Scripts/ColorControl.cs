using System;
using System.Linq;
using UnityEngine;
using System.Collections;

public class ColorControl : MonoBehaviour {

	void Start() {

	}

	void ChangeColor(string colorString) {
		Material mat = renderer.material;
//		float[] color = Array.ConvertAll(colorString.Split(','), float.Parse);
		float[] color = colorString.Split (',').Select (x => float.Parse (x)).ToArray ();
		mat.SetColor ("_Color", new Color(color[0], color[1], color[2]));
	}
}
