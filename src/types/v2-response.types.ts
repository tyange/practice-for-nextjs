export interface V2Response<T> {
  result: "SUCCESS" | "FAIL";
  data: T;
}
