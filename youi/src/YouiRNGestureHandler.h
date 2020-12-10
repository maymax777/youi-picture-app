#ifndef _RN_GESTURE_HANDLER_MODULE_H_
#define _RN_GESTURE_HANDLER_MODULE_H_

#include <folly/dynamic.h>

#include <youireact/NativeModule.h>

class YI_RN_MODULE(RNGestureHandler)
{
public:
    RNGestureHandler();
    virtual ~RNGestureHandler();

    YI_RN_EXPORT_NAME(RNGestureHandlerModule);

    YI_RN_EXPORT_CONSTANT(Direction);

    YI_RN_EXPORT_METHOD(createGestureHandler)(std::string name, uint64_t tag, folly::dynamic config);

    YI_RN_EXPORT_METHOD(attachGestureHandler)(uint64_t handlerTag, uint64_t viewTag);

    YI_RN_EXPORT_METHOD(updateGestureHandler)(uint64_t handlerTag, folly::dynamic newConfig);

    YI_RN_EXPORT_METHOD(dropGestureHandler)(uint64_t handlerTag);

    YI_RN_EXPORT_METHOD(handleSetJSResponder)(uint64_t viewTag);

    YI_RN_EXPORT_METHOD(blockNativeResponder)(uint64_t blockNativeResponder);

    YI_RN_EXPORT_METHOD(handleClearJSResponder)();
};
#endif