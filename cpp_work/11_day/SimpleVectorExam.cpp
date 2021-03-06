#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> vec;
    
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    vec.push_back(40);

    // for(vector<int>::size_type i = 0; i < vec.size(); i++)
    // {
    //     cout << "vec " <<  i << " : " << vec[i] << endl; 
    // }

    for(vector<int>::iterator itr = vec.begin(); itr != vec.end(); ++itr)
    {
        cout << "vector itr : " << *itr << endl;
    }

    vector<int>::iterator itr = vec.begin() + 2;
    cout << "third element : " << *itr << endl;

    return 0;
}