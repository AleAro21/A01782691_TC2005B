/*
Move a GameObject horizontally using the arrow keys or AD

Gilberto Echeverria
2023-03-01
*/

using UnityEngine;

public class verticalMovment: MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField] float limit;

    Vector3 move;

    // Update is called once per frame
    void Update()
    {
        move.y = Input.GetAxis("Vertical");
        //Debug.Log("X motion: " + move.x);

        // Limit the motion to a specific range of coordinates
        if (transform.position.y < -limit && move.y < 0) {
            move.y = 0;
        } else if (transform.position.y > limit && move.y > 0) {
            move.y = 0;
        } 

        // Apply the motion, scaled for the time between frames
        transform.Translate(move * speed * Time.deltaTime);
    }
}