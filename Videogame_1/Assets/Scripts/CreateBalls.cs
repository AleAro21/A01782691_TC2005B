using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CreateBalls : MonoBehaviour
{
    // Class variable to be changed from the Unity interface
    [SerializeField] GameObject ball;

    // Start is called before the first frame update
    void Start()
    {
        // Call the 'DropBall' function after 0.5s
        // and then keep calling it every 0.5s
        InvokeRepeating("DropBall", 0.5f, 0.8f);
    }

    void DropBall()
    {
        // Crete a copy of the prefab
        Instantiate(ball);
    }
}
