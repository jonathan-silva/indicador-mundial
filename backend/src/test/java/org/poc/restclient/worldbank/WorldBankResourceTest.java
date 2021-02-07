package org.poc.restclient.worldbank;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
class WorldBankResourceTest {

    @Test
    void findByCdPaisPaginator() {
        given()
                .when().get("/world-bank/BR?page=1&per_page=5&format=json")
                .then()
                .statusCode(200)
                .body(
                        "$.size()", is(2)
                );
    }
}