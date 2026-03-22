import {
  Message as _Message
} from "tdesign-mobile-vue";

import {
  IMessageProps
} from "./types";

class Message {
  #isShow = false;

  public show(options: IMessageProps): void {

    if (this.#isShow) {
      return;
    }

    this.#isShow = true;

    _Message.info({
      content: options.content,
      onDurationEnd: () => {
        this.#isShow = false;
      }
    });
  }

  public close(): void {
    this.#isShow = false;
    _Message.closeAll(); // 调用TDesign的关闭方法
  }
}

const message = new Message();

export default (options: IMessageProps): void => message.show(options);

export { message as Message };
