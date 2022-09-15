import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { SubTitle } from "../../components/subtitle";
import { Title } from "../../components/title";

import facebook from "../../assets/socials/facebook.svg";
import mail from "../../assets/socials/mail.svg";

import lhamaSheep from "../../assets/animals/lhamaSheep.svg";
import logoDesk from "../../assets/logo/LogoDesk.png";

import { Container } from "../../styles/container";
import { Main, MainWrapper, Section } from "./style";

import { AuthContext } from "../../providers/Auth";
import { useContext, useState } from "react";


export const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const data = {name, email, password, age}
  return (
    <MainWrapper>
      <Container
        padding
        flex
        flexDirection
        containerWidth={1320}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={2}
      >
        <Section
          boxShadow
          whiteBackground={true}
          padding
          minWidth={320}
          borderRadius={15}
        >
          <header>
            <Title>Create Account</Title>
          </header>
          <Main>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                createUser(data);
              }}
            >
              <div className="socials">
                <a>
                  <img src={mail} alt="Login with mail" />
                </a>
                <a>
                  <img src={facebook} alt="Login with facebook" />
                </a>
              </div>

              <p className="text-orientation">
                or use your email for registration:
              </p>

              <div className="inputs-wrappers">
                <Input
                  placeholder="Name"
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Input placeholder="Confirm Password" type="password" />
                <Input
                  placeholder="Age"
                  type="number"
                  onChange={(event) => setAge(event.target.value)}
                />
              </div>

              <div>
                <label className="terms">
                  <Input className="terms-checkbox" type="checkbox" />
                  Agree to the <a>Terms</a>
                </label>
              </div>

              <div className="sign-buttons">
                <Button selected type="submit">
                  Sign Up
                </Button>
                <Button notSelected type="button">
                  Sign In
                </Button>
              </div>
            </form>
          </Main>
        </Section>

        <Section padding>
          <div className="flex-wrapper">
            <img src={logoDesk} />
            <SubTitle>Join us and find your perfect match!</SubTitle>
            <img className="animalImg" src={lhamaSheep} alt="" />
          </div>
        </Section>
      </Container>
    </MainWrapper>
  );
};
