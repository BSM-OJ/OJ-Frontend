import React from "react";
import type { NextPage } from "next";
import * as S from "../../../styles/register/style";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import {
  GET_PROBLEM_INFO_URL,
  UPLOAD_PRIVATE_PROBLEM_EXAMPLESET_URL,
} from "../../../constant/url";
import axios from "axios";
import Head from "next/head";

const UploadTestcase: NextPage = () => {
  const router: NextRouter = useRouter();
  const route: ParsedUrlQuery = router.query; // 다이나믹 라우트 받는 부분

  const [input, setInput] = React.useState<string>("");
  const [output, setOutput] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  type dynamic_routing = string | string[] | undefined; // pid 기본 타입, 처음에 로딩 안될때는 undefined라서 어쩔수없

  const setTestcase = async (ProblemId: dynamic_routing) => {
    let data = {
      problemId: ProblemId, // 문제 번호
      answerInput: input,
      answerOutput: output,
    };
    let config = {
      method: "post",
      url: UPLOAD_PRIVATE_PROBLEM_EXAMPLESET_URL,
      headers: {},
      data: data,
      withCredentials: true,
    };
    if (data.answerOutput == "") {
      alert("출력은 공백일 수 없습니다.");
      return;
    }
    await axios(config)
      .then(function (response) {
        alert("등록이 완료되었습니다.");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    if (route.id != null) {
      let config = {
        method: "get",
        url: `${GET_PROBLEM_INFO_URL}/${route.id}`,
        headers: {},
        withCredentials: true,
      };

      axios(config)
        .then(function (response) {
          setTitle(response.data.title);
        })
        .catch(function (error) {
          alert("접근 권한이 없습니다.");
          router.push("/");
        });
    }
    // eslint-disable-next-line
  }, [route.id]);

  return (
    <>
      <Head>
        {/** 웹 외부요소 선언부 */}
        <title>{route.id}번 문제</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content="text/html; charset=utf-8" />
        <meta
          property="og:title"
          content={`${route.id} - ${title}`}
          key="title"
        />
      </Head>
      <main>
        <S.MainText>실제로 채점하는 데이터입니다.</S.MainText>
        <S.MainText>
          {route.id} - {title && title}
        </S.MainText>
        <S.RegisterTestcase
          name="input"
          placeholder="문제의 예제 입력을 입력해주세요."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <S.RegisterTestcase
          name="output"
          placeholder="문제의 예제 출력을 입력해주세요."
          onChange={(e) => {
            setOutput(e.target.value);
          }}
        />
        <p style={{ textAlign: "center", color: "white" }}>
          예제 등록은 한번에 최대 1개까지 가능합니다.
        </p>
        <S.RegisterButton
          onClick={() => {
            setTestcase(route.id);
          }}
        >
          등록하기
        </S.RegisterButton>
      </main>
    </>
  );
};

export default UploadTestcase;
