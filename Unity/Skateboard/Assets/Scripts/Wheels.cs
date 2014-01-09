using UnityEngine;
using System.Collections;

public struct Wheels {

	public GameObject noseL, noseR, tailL, tailR;

	public Wheels(GameObject inNoseL, GameObject inNoseR, GameObject inTailL, GameObject inTailR) {
		noseL = inNoseL;
		noseR = inNoseR;
		tailL = inTailL;
		tailR = inTailR;
	}
}
