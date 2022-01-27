#pragma once
class CBox
{
    public:
        CBox() 
        {
            m_length = 0.0f;
            m_breadth = 0.0f;
            m_height = 0.0f;
        };
        ~CBox() {};
        
        double GetVolume();
        void SetLength(double length);
        void SetBreadth(double breadth);
        void SetHeight(double height);
        CBox operator+(const CBox&);
        CBox operator*(const CBox&);
    
    private:
        double m_length;
        double m_breadth;
        double m_height;
}