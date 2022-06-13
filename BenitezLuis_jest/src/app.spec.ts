import{getType,getLevel, sumar} from "./app";
describe("Functions Randoms",()=>{

    test('debe sumar[10] y [20] devolver [30] con la funcion sumar',()=>{

        //AAA

        //Arranque
        const primervalor=10
        const segundovalor=20
        const resultExpected=30

        let result:number 
        //Act

        result=sumar(primervalor,segundovalor)

        //Assert
        expect(
            result
        ).toBe(resultExpected)



    })

    test("debe devolver [Junior] con la funcion getLevel cuando envio [30] ",()=>{

        const resultExpected = "Junior"
        const level =30

        let result:string

        result = getLevel(level)
        expect(
            result
        ).toBe(resultExpected)


    })

    test("debe devolver [Semisenior] con la funcion getLevel cuando envio [70] ",()=>{
        
        const resultExpected = "Semisenior"
        const level =70

        let result:string

        result = getLevel(level)
        expect(
            result
        ).toBe(resultExpected)


    })

    test("debe devolver [Senior] con la funcion getLevel cuando envio [90] ",()=>{
        
        const resultExpected = "Senior"
        const level =90

        let result:string

        result = getLevel(level)
        expect(
            result
        ).toBe(resultExpected)


    })

    test("fn #getType", ()=>{
        const expected = expect.any(Number)

        const random = 60
        const result= getType(random)

        expect(
            result
        ).toEqual(
            expected

        )
    })

    test("Marchers", ()=>{
        const data = ['Red', 'blue', 'orange']

        expect(
            data
        ).toContain('blue')

        expect(
            data
        ).not.toContain('Ramon')

        expect(
            30>50
        ).toBeFalsy()

        expect(
            30>50
        ).not.toBeTruthy()

        let lastname:string =""
        expect(
            lastname
        ).toBeDefined()

        expect(
            50
        ).toBeGreaterThan(25)

        expect(
            50
        ).toBeGreaterThanOrEqual(50)
    })
    
})