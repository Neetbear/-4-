#include <iostream>
#include <map>
#include <string>

using namespace std;

template <typename K, typename V>
void PrintMapElement(map<K, V>& m)
{
    for(auto itr = m.begin(); itr != m.end(); ++itr)
    {
        cout << itr->first << ", " << itr->second << endl;
    }
}

template<typename K, typename V>
void SearchPrintElement(map<K, V>& m, K key)
{
    auto itr = m.find(key);
    if(itr != m.end())
    {
        cout << key << " => " << itr->second << endl;
    }
    else
    {
        cout << key << " is not foud in map" << endl;
    }
}

int main()
{
    map<string, double> pitcherList;

    pitcherList.insert(pair<string, double>("Kershaw", 0.12));
    pitcherList.insert(pair<string, double>("Kershaw", 7.89));
    pitcherList.insert(pair<string, double>("Otani", 5.34));

    pitcherList.insert(make_pair<string, double>("Chanho", 2.12));
    pitcherList.insert(make_pair<string, double>("SunWoo", 3.14));
    pitcherList.insert(make_pair<string, double>("KwangHyun", 3.55));

    pitcherList["DongRyul"] = 3.45;
    pitcherList["DongWon"] = 1.67;
    pitcherList["ChooChoo"] = 2.51;

    PrintMapElement(pitcherList);

    cout << "Chanho's ERA = " << pitcherList["Chanho"] << endl;
    pitcherList["ChooChoo"] = 8.15;
    cout << "ChooChoo's ERA = " << pitcherList["ChooChoo"] << endl;

    SearchPrintElement(pitcherList, string("Chaboom"));
    SearchPrintElement(pitcherList, string("Otani"));

    return 0;
}