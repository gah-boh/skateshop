using UnityEngine;
using System.Collections;

public class WheelsFactory : Object {

	public Wheels CreateStreetWheels() {
		GameObject tailLeft = GameObject.Find ("StreetWheel_L_T_Loc");
		GameObject tailRight = GameObject.Find ("StreetWheel_R_T_Loc");
		GameObject noseLeft = GameObject.Find ("StreetWheel_L_N_Loc");
		GameObject noseRight = GameObject.Find ("StreetWheel_R_N_Loc");

		Wheels streetWheels = new Wheels (noseLeft, noseRight, tailLeft, tailRight);
		return streetWheels;
	}
}
