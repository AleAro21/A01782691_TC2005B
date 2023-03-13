/*
Keep track of the points scored in the game

Gilberto Echeverria
2023-03-01
*/

using UnityEngine;
using TMPro;

public class Score_2 : MonoBehaviour
{
    [SerializeField] TMP_Text tmpObj_2;
    [SerializeField] int maxScore_2;

    CreateBalls creator_2;
    int score_2;

    // Start is called before the first frame update
    void Start()
    {
        creator_2 = GetComponent<CreateBalls>();
        score_2 = 0;
    }
    public void AddPoints_2(int amount_2)
    {
        score_2 += amount_2;
        // Udate the text displayed on the screen
        tmpObj_2.text = "Points scored: " + score_2;
        //Debug.Log("New score: " + score);

        if (score_2 == maxScore_2) {
            Finish2();
        }
    }

    void Finish2()
    {
        creator_2.StopBalls();
        tmpObj_2.text += "\n\nYou win :)";
        
    }
}
