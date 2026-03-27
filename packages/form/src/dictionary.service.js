
export const getOptions = (c) => {
  return new Promise((resolve) => {
    const mockList = [
      {
        label: "示例选项一",
        value: "1",
      },
      {
        label: "示例选项二",
        value: "2",
      },
    ]

    resolve(mockList)
  });
}

