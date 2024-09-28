export class HttpError extends Error {
  status: number;
  data?: string;

  constructor(status: number, message: string, data?: string) {
    super(message);
    this.status = status;
    this.data = data;

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
