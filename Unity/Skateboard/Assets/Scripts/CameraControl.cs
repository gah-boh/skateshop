using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;

public class CameraControl : MonoBehaviour {
	
	public Transform target;
	public float distance = 475.0f;
	public float nearDistance = 237.5f;
	public float farDistance = 475.0f;
	public float height = 0.0f;
	public float rotateFront = 0.0f;
	public float minRotateVert = -90.0f;
	public float maxRotateVert = 90.0f;
	
	private float x = 30.0f;
	private float y = 40.0f;
	
	// Use this for initialization
	void Start ()
	{
		RotateCamera();
	}
	
	private float RemapVerticalRotation( float rotation )
	{
		float normalizedRotation;
		float outRotation;
		if( rotation < 0 )
		{
			normalizedRotation = rotation / -90.0f;
			outRotation = normalizedRotation * minRotateVert;
		}
		else
		{
			normalizedRotation = rotation / 90.0f;
			outRotation = normalizedRotation * maxRotateVert;
		}
			
		return outRotation;
	}
	
	private float RemapHorizontalRotation()
	{
		return y - 90f + rotateFront;
	}
	
	public void RotateCamera()
	{
		transform.rotation = Quaternion.Euler(RemapVerticalRotation(x), RemapHorizontalRotation(), 0);
		transform.position = transform.rotation * new Vector3(0.0f, height, -distance) + target.position;
	}
	
	public void Update()
	{
		if (Input.GetMouseButton(0)) {
			x -= Input.GetAxis("Mouse Y") * 2.0f;
			y += Input.GetAxis("Mouse X")* 2.0f;
			RotateCamera();
		}
	}
}
