import type { MenuItem } from "./types/chat";

export const data: MenuItem[] =[
    {
      id: 1,
      label: "교육과정 안내",
      response:
        "건설기술인 직무교육, 정밀안전진단, 정기안전점검 등 다양한 교육과정이 있습니다.",
      hasDetail: true,
      detailType: "course",
    },
    {
      id: 2,
      label: "수강신청 방법",
      response:
        "홈페이지에서 회원가입 후 원하는 교육과정을 선택하여 신청하시면 됩니다.",
      hasDetail: true,
      detailType: "enrollment",
    },
    {
      id: 3,
      label: "환불 안내",
      response:
        "교육 시작 전 취소 시 전액 환불, 교재 제작이 완료된 경우 교재비 제외 후 환불됩니다.",
      hasDetail: true,
      detailType: "refund",
    },
    {
      id: 4,
      label: "고객센터 연결",
      response: "대표번호: 02-575-7123\n원격교육문의: 1522-2938",
      hasDetail: true,
      detailType: "customer",
    },
  ];