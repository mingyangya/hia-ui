
export const getOptions = (c) => {
  return new Promise((resolve) => {
    // 从参数 c 中解构出 dirctionaryType 属性
    const { dirctionaryType } = c

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

