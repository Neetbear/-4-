#include <iostream>
#include <list>
#include <stdlib.h>
#include <string>
#include <time.h>
using namespace std;

int main()
{
    bool newGame = true;
    while(newGame)
    {
        srand(time(NULL));

        string* solutionNum = new string;
        string* answerNum = new string;

        int a = 0, b = 0, c = 0; 
        while(a == 0 || a == b || b == c || c ==a)
        {
            a = rand() % 9;
            b = rand() % 9;
            c = rand() % 9;
        }
        // int sNums[] = { 0,1,2,3,4,5,6,7,8,9 };
        // for(int i = 0; i < 100; i++)
        // {
        //     int a = rand() % 9;
        //     int b = rand() % 9;
        //     int tmp = sNums[a];
        //     sNums[a] = sNums[b];
        //     sNums[b] = tmp;
        // }
        *solutionNum = to_string(a*100 + b*10 + c);
        cout << *solutionNum << endl;

        bool inputNum = true;
        while(inputNum)
        {    
            int strikeNums = 0, ballNums = 0;
            cout << "Input 3 Numbers : ";
            cin >> *answerNum; cout << endl;
            bool Game = true;

            if( (*answerNum).length() != 3 )
            {
                cout << "Please enter a 3-digit number" << endl;
            }
            else if( (*answerNum).length() == 3 )
            {
                for(int i = 0; i < 3; i++)
                {
                    if(isdigit((*answerNum)[i]) != 4)
                    {
                        cout << "Only Numbers" << endl;
                        Game = false;
                        break;
                    }
                }
                if(Game)
                {
                    if((*answerNum)[0] == (*answerNum)[1] || (*answerNum)[1] == (*answerNum)[2] || (*answerNum)[2] == (*answerNum)[0])
                    {
                        cout << "Please enter no duplicates" << endl;

                    }
                    else
                    {
                        for(int i = 0; i < 3; i++)
                        {
                            for(int j = 0; j < 3; j++)
                            {
                                if(i == j && (*solutionNum)[i] == (*answerNum)[j]) strikeNums += 1;
                                else if(i != j && (*solutionNum)[i] == (*answerNum)[j]) ballNums += 1;
                            }
                        }
                        if(strikeNums == 3)
                        {
                            cout << "3strikes!!! Congratulations!!!" << endl;
                            inputNum = false;
                        }
                        else
                        {
                            cout << strikeNums << "strikes" << ballNums << "balls" << endl;
                        }
                    }
                }
            }
        }

        if ( solutionNum != NULL)
        {
            delete solutionNum;
            solutionNum = NULL;
        }

        if ( answerNum != NULL)
        {
            delete answerNum;
            answerNum = NULL;
        }
        char answer = ' ';
        cout << "Do you wanna new game? (y/n)";
        cin >> answer; cout << endl;
        if( answer == 'n')
        {
            newGame = false;
        } 
    }
    return 0;
}