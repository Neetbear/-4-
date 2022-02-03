#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

int main() {
	fs::path p = "./";
	std::cerr << fs::absolute(p);
}