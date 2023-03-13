/*
Detect when the ball goes inside the net

Gilberto Echeverria
2023-03-01
*/

using UnityEngine;

public class Ballin_2 : MonoBehaviour
{
    [SerializeField] Score_2 scoreObj_2;

    // Detect two elements in contact
    void OnTriggerEnter2D()
    {
       scoreObj_2.AddPoints_2(1); 
    }

   
    
}
