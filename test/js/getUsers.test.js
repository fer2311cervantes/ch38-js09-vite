import { getUsersUsingFetch, getUsersUsingAxios } from "../../src/js/getUser";

const url = "https://reqres.in/api/users?page=2";
//const url = "../../public/json/user.json"
/**Probar api fetch */
test("El array de users no esta vacio", async()=>{
    const users = await getUsersUsingFetch( url );
    expect( Array.isArray( users ) ).toBe( true ); //toBeTruthly();
    expect( Array.isArray( users ) ).toBeTruthy();
    expect( users.length > 0 ).toBe( true );
    expect( users.length ).toBeGreaterThan(0);
})

/**Probar api axios*/
test("El array de users no esta vacio", async()=>{
    const users = await getUsersUsingAxios( url );
    expect( Array.isArray( users ) ).toBe( true ); //toBeTruthly();
    expect( Array.isArray( users ) ).toBeTruthy();
    expect( users.length > 0 ).toBe( true );
    expect( users.length ).toBeGreaterThan(0);
})