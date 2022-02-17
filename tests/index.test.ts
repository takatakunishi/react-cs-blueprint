import hello from "index"

describe("hello() tests", () => {
    test("show hello", () => {
        const log = jest.spyOn(console, "log").mockReturnValue()
        hello()
        expect(log).toHaveBeenNthCalledWith(1, "hello")
        log.mockRestore()
    })
})