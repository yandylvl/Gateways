export function ipv4(message = "Invalid IP address") {
  return this.matches(
    /^(?=\d+\.\d+\.\d+\.\d+(\/\d+)?$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}(?:\/(?:[0-9]|1[0-9]|2[0-9]|3[0-2]))?$/,
    {
      message,
      excludeEmptyString: true,
    }
  ).test("ip", message, (value) => {
    return value === undefined || value.trim() === ""
      ? true
      : value.split(".").find((i) => parseInt(i, 10) > 255) === undefined;
  });
}
