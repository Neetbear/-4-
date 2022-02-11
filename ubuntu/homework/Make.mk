CPP = g++ 
CXXFLAGS = -Wall -O2
OBJS = move.o scale.o area.o main.o

TARGET = triangle

all: triangle

move.o : move.h move.cpp
	$(CPP) $(CXXFLAGS) -c move.cpp

scale.o : scale.h scale.cpp
	$(CPP) $(CXXFLAGS) -c scale.cpp

area.o : area.h area.cpp
	$(CPP) $(CXXFLAGS) -c area.cpp

main.o : main.cpp move.h scael.h area.h
	$(CPP) $(CXXFLAGS) -c main.cpp

$(TARGET) : $(OBJS)
	$(CPP) $(CXXFLAGS) $(OBJS) -o $(TARGET)

.PHONY: clean all
clean:
	rm -fv $(OBJS) $(TARGET)

