#include <iostream>
#include <list>

using namespace std;

template <typename T>
void PrintList(list<T>& lst)
{
    cout << "[";
    for(const auto& ele : lst)
    {
        cout << ele << " ";
    }
    cout << "]\n";
}

int main()
{
    list<int> nList;
    nList.push_back(10);
    nList.push_back(20);
    nList.push_back(30);
    nList.push_back(40);
    
    for(list<int>::iterator itr = nList.begin(); itr != nList.end() ; ++itr)
    {
        cout << *itr << endl;
    }

    cout << "================================================" << endl;

    cout << "Initial status at list" << endl;
    PrintList(nList);

    cout << "================================================" << endl;

    for(list<int>::iterator itr = nList.begin(); itr != nList.end(); ++itr)
    {
        if(*itr == 20)
        {
            nList.insert(itr, 50);
        }
    }

    cout << "element valut before 20 insert 50" << endl;
    PrintList(nList);

    cout << "================================================" << endl;
    
    for(list<int>::iterator itr = nList.begin(); itr != nList.end(); ++itr)
    {
        if(*itr == 30)
        {
            nList.erase(itr);
            break;
        }
    }

    cout << "element valut 30 deleted" << endl;
    PrintList(nList);

    return 0;
}