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

	public Wheels CreateMediumWheels() {
		GameObject tailLeft = GameObject.Find ("MediumWheel_L_T_Loc");
		GameObject tailRight = GameObject.Find ("MediumWheel_R_T_Loc");
		GameObject noseLeft = GameObject.Find ("MediumWheel_L_N_Loc");
		GameObject noseRight = GameObject.Find ("MediumWheel_R_N_Loc");
		
		Wheels mediumWheels = new Wheels (noseLeft, noseRight, tailLeft, tailRight);
		return mediumWheels;
	}

	public Wheels CreateLargeWheels() {
		GameObject tailLeft = GameObject.Find ("LargeWheel_L_T_Loc");
		GameObject tailRight = GameObject.Find ("LargeWheel_R_T_Loc");
		GameObject noseLeft = GameObject.Find ("LargeWheel_L_N_Loc");
		GameObject noseRight = GameObject.Find ("LargeWheel_R_N_Loc");
		
		Wheels largeWheels = new Wheels (noseLeft, noseRight, tailLeft, tailRight);
		return largeWheels;
	}
}
