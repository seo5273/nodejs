#include <v8.h>
#include <node.h>

using namespace v8;

Handle<Value> Add(const Arguments &args) {
	HandleScope scope;

	int a = 5;
	int b = 6;
	int sum = a + b;

	return scope.Close(Number::New(sum));
}

void Init(Handle<Object> exports) {
	exports->Set(String::NewSymbol("add"),
		FunctionTemplate::New(Add)->GetFunction());
}

NODE_MODULE(addon, Init)
