using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CreateBalls : MonoBehaviour
{
    // Class variable to be changed from the Unity interface
    [SerializeField] GameObject ball;
      [SerializeField] float delay;

    // Start is called before the first frame update
    void Start()
    {
        // Call the 'DropBall' function after 0.5s
        // and then keep calling it every 0.5s
        InvokeRepeating("DropBall", 0.5f, delay);
    }

    void DropBall()
    {
        // Generate a new random position
        Vector3 pos = new Vector3(Random.Range(-10.0f, 10.0f), 14, 0);
        // Crete a copy of the prefab
        GameObject obj = Instantiate(ball, pos, Quaternion.identity);
        // Doom the object to die in 5s
        Destroy(obj, 5);
    }
}