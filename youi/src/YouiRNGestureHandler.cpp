/*
You i Labs Inc. All rights reserved.
This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
#include "YouiRNGestureHandler.h"

#include <youireact/NativeModuleRegistry.h>

YI_RN_INSTANTIATE_MODULE(RNGestureHandler);
YI_RN_REGISTER_MODULE(RNGestureHandler);

RNGestureHandler::RNGestureHandler() = default;
RNGestureHandler::~RNGestureHandler() = default;

YI_RN_DEFINE_EXPORT_CONSTANT(RNGestureHandler, Direction)
{
    return "";
}

YI_RN_DEFINE_EXPORT_METHOD(RNGestureHandler, createGestureHandler)(std::string name, uint64_t tag, folly::dynamic config) {}
YI_RN_DEFINE_EXPORT_METHOD(RNGestureHandler, attachGestureHandler)(uint64_t handlerTag, uint64_t viewTag) {}
YI_RN_DEFINE_EXPORT_METHOD(RNGestureHandler, updateGestureHandler)(uint64_t handlerTag, folly::dynamic newConfig) {}
YI_RN_DEFINE_EXPORT_METHOD(RNGestureHandler, dropGestureHandler)(uint64_t handlerTag) {}
YI_RN_DEFINE_EXPORT_METHOD(RNGestureHandler, handleSetJSResponder)(uint64_t viewTag) {}
YI_RN_DEFINE_EXPORT_METHOD(RNGestureHandler, blockNativeResponder)(uint64_t blockNativeResponder) {}
YI_RN_DEFINE_EXPORT_METHOD(RNGestureHandler, handleClearJSResponder)() {}