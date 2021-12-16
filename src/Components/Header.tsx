import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { sidebarState } from "../atoms";

const Container = styled.header`
  z-index: 2;
  height: 64px;
  width: 100vw;
  position: fixed;
  top: 0;
  border-bottom: solid 1px ${(props) => props.theme.bgColor.subBg};
  color: ${(props) => props.theme.textColor.defaultText};
  background-color: ${(props) => props.theme.bgColor.mainBg};
`;
const Wrapper = styled.div`
  padding: 0 22px;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.textColor.defaultText};
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;
const SideMenuBtn = styled.button`
  font-size: 24px;
`;
const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 46px;
  img {
    width: 26px;
  }
  h1 {
    font-size: 20px;
    color: #666;
  }
`;
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;
const SearchBtn = styled.button`
  position: absolute;
  left: 10px;
  top: 13px;
  font-size: 18px;
`;
const SearchInput = styled.input`
  background-color: ${(props) => props.theme.bgColor.subBg};
  width: 50vw;
  max-width: 720px;
  height: 46px;
  border: none;
  border-radius: 10px;
  padding-left: 50px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
const RefreshBtn = styled.button`
  font-size: 24px;
`;
const SettingBtn = styled.button`
  font-size: 24px;
`;

interface ISearchForm {
  search: string;
}

function Header() {
  const setSidebar = useSetRecoilState(sidebarState);
  const { register, handleSubmit, setValue } = useForm<ISearchForm>();
  const onSearchValid = () => setValue("search", "");
  const toggleSidebar = () => setSidebar((current) => !current);
  return (
    <Container>
      <Wrapper>
        <HeaderLeft>
          <SideMenuBtn
            onClick={toggleSidebar}
            className="xi-bars"
          ></SideMenuBtn>
          <Logo>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1489px-Google_Keep_icon_%282020%29.svg.png"
              alt="logo"
            />
            <h1>Keep</h1>
          </Logo>
          <SearchForm onSubmit={handleSubmit(onSearchValid)}>
            <SearchBtn className="xi-search" />
            <SearchInput
              autoSave="off"
              autoComplete="off"
              placeholder="검색"
              {...register("search", {
                required: "검색어를 입력해주세요",
                minLength: { value: 2, message: "두 글자 이상 입력해주세요" },
              })}
            />
          </SearchForm>
        </HeaderLeft>
        <HeaderRight>
          <RefreshBtn className="xi-refresh"></RefreshBtn>
          <SettingBtn className="xi-cog"></SettingBtn>
        </HeaderRight>
      </Wrapper>
    </Container>
  );
}

export default Header;
