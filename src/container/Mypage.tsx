import React, { useState } from 'react';
import './Mypage.scss';
import Photo from '../image/photo.png';
import PlanList from '../components/PlanList';
import EditInfo from '../components/EditInfo';

function Mypage() {
  const [userinfo, setUserinfo] = useState({
    name: '이종원',
    userid: 'per1215',
    email: 'syd1215no@gmail.com',
    phone: '010-6418-7794',
    created: '20.11.12',
  });

  const [planList, setPlanList] = useState([
    {
      id: 0,
      planName: '부산 여행',
      inst: '부산은 역시 돼지국밥',
      created: '20.11.12',
    },
    {
      id: 1,
      planName: '서울 여행',
      inst: '서울은 역시 강남',
      created: '20.11.12',
    },
    {
      id: 2,
      planName: '강원도 여행',
      inst: '서울은 역시 감자',
      created: '20.11.12',
    },
    {
      id: 3,
      planName: '제주도 여행',
      inst: '제주도은 역시 한라봉',
      created: '20.11.12',
    },
    {
      id: 4,
      planName: '경주',
      inst: '경주은 역시 불국사',
      created: '20.11.12',
    },
    {
      id: 5,
      planName: '전주',
      inst: '전주은 역시 비빔밥',
      created: '20.11.12',
    },
    {
      id: 6,
      planName: '전주',
      inst: '전주은 역시 비빔밥',
      created: '20.11.12',
    },
    {
      id: 7,
      planName: '전주',
      inst: '전주은 역시 비빔밥',
      created: '20.11.12',
    },
    {
      id: 8,
      planName: '전주',
      inst: '전주은 역시 비빔밥',
      created: '20.11.12',
    },
    {
      id: 9,
      planName: '전주',
      inst: '전주은 역시 비빔밥',
      created: '20.11.12',
    },
    {
      id: 10,
      planName: '전주',
      inst: '전주은 역시 비빔밥',
      created: '20.11.12',
    },
    {
      id: 11,
      planName: '전주',
      inst: '전주은 역시 비빔밥',
      created: '20.11.12',
    },
    {
      id: 12,
      planName: '전주',
      inst: '전주은 역시 비빔밥',
      created: '20.11.12',
    },
    {
      id: 13,
      planName: '전주',
      inst: '전주은 역시 비빔밥',
      created: '20.11.12',
    },
    {
      id: 14,
      planName: '전주',
      inst: '전주은 역시 비빔밥',
      created: '20.11.12',
    },
    {
      id: 15,
      planName: '전주',
      inst: '전주은 역시 비빔밥',
      created: '20.11.12',
    },
    {
      id: 16,
      planName: '전주',
      inst: '전주은 역시 비빔밥',
      created: '20.11.12',
    },
  ]);

  const [search, setSearch] = useState('');
  const [onModal, setOnModal] = useState(false);

  const { name, userid, email, phone } = userinfo;

  const onRemove = (id: number): void => {
    setPlanList(planList.filter((el) => el.id !== id));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // console.log(e.target)
  };

  const editOnModal = (e: any) => {
    setOnModal(!onModal);
  };

  return (
    <div id="mypage">
      {onModal && <EditInfo editOnModal={editOnModal} userinfo={userinfo} />}
      <div id="profileLeft">
        <div id="profileLeft_profile">
          <img width="46px" id="profileLeft_profile_photo" src={Photo} alt="" />
          <h1 id="profileLeft_profile_name">{name}</h1>
          <button id="profileLeft_profile_editBtn" onClick={editOnModal}>
            EDIT
          </button>
        </div>
        <div id="profileLeft_myInfo">
          <div id="profileLeft_myInfo_titleBar">User info</div>
          <div id="profileLeft_myInfo_detail">
            <div id="profileLeft_myInfo_detail_userId">
              <div id="detail_title">아이디</div>
              <div>{userid}</div>
            </div>
            <div id="profileLeft_myInfo_detail_email">
              <div id="detail_email">이메일</div>
              <div>{email}</div>
            </div>
            <div id="profileLeft_myInfo_detail_phone">
              <div id="detail_phone">전화번호</div>
              <div>{phone}</div>
            </div>
            <div id="profileLeft_myInfo_detail_plans">
              <div id="detail_plan">내 여행</div>
              <div>{planList.length}</div>
            </div>
          </div>
        </div>
      </div>
      <div id="profileRight">
        <div id="profileRight_contents">
          <div id="profileRight_contents_titleBar">
            {/* <button id="profileRight_contents_addBtn">Add</button> */}Plan
            List
          </div>
          {/* <div className="mypage_planlist"> */}
          <div id="profileRight_contents_planList">
            {planList.map((el) => (
              <PlanList key={el.id} user={el} onRemove={onRemove} />
            ))}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
