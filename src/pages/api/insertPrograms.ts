import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../api/supabase'; // supabase.ts가 이 위치에 있다고 했으니까!

const insertPrograms = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const contentData = [
        {
            title: '오마(음)카세',
            type: '1',
            imgurls: [
                'https://lh3.googleusercontent.com/pw/ABLVV85vQv4f1QQYC0gwl_5he6W8XeBJjjfw4hnfJCJ5p8Fot6YLw6BSnhFXCOyW6DDVXuatoxEkHsc1lxNvcq2ZMznHUJ7xjWKkNgiWoKDyNGMFR33EXCw=w2400',
                'https://lh3.googleusercontent.com/pw/ABLVV86RapmCcFnNCUcP7QZNtMrcG2EiEHT6bW3LU1JnJquUqP_afas-9Trq9uLMu4kmaoSpypvlclIUf98yc7Pp0QlFM1ovuaEGrF0PLtq0ebI9MFJEKg=w2400',
                'https://lh3.googleusercontent.com/pw/ABLVV878trT5EhnlJ_Y8Vpr8CGSqCLdOZRhoP6HiReatN4RNkV44c4kPNmlvcThEoPLD1x8H_XKNbpISwxsN-R_ubjuJsNrYt8rmCCFkwiNW8B6Gjqi03g=w2400',
                'https://lh3.googleusercontent.com/pw/ABLVV863afoz9575r7-43izJBg1B519FmqITHtAJQHzdm7fgj8BZ0oi8xCeIBmHeEDvE3cpGpahMK1ZCn7xzRvys1e-1BiTK6US9dF7VYNgta3JDFX4LgQ=w2400'
            ],
            description: '청년들에게 디저트 오마카세를 저렴한 가격으로 제공하며, 더불어 의미있는 심리테스트를 제공하는 팝업스토어입니다.',
        },
        // 다른 데이터들...
            {
                title: '연합 운동회X청년 단체',
                type: '2',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV85O16iiVobgtG0XgLvoejxe_bLNtkQUDMZL0SqvIq3U-UvSNObljLvY04FjneWbgV5eslTFiYPL0HbtUfqOSO4BlaWSEwMd0rthdc2NCeN2o025fQ=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV85wG6LE86q1vMUmc7ML-1h1W16J5BtGglLQfoa5n2Og5KYcM9gMdXC_1YtMHJGzJfsxc5KTkuv6LfU2zzocdz1jiVlYL3Olp7GDQIgzUAOdO93t2A=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV86W8xlDsO8rL2djROAwMRHjUNl09rhziF0qPDChwzh1QILBNo61cLq6zUpY-9f3YXRiQDYbBPsItxRgXjW-L--q062j2Obf-FFdQjgSUtMPwS7dhw=w2400'
                ],
                description: '코로나로 모이지 못해 지친 청년들을 위해 단체들과 협업하여 청년운동회를 개최합니다.',
            },
            {
                title: '플라워 원데이클래스',
                type: '3',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV87v0m5eMR66Rqk8bVtdYvgKFrlJm8Q8gOYNgWHm-N-M4aJWV2GdqIblamH2GKuVpug6CDUrMDE2uEBmBVr8Zcwl9BsNd41b2b5Sfw7qfPX4yXU9YGk=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV87G6T3o3NgjFQouXBwJxrjHMZR650ADCv4w1dBaErCOEb46w9Mkp7t3e9mOFGGCtshMPVyoxLDycklzbZkOq9oB2MCiKVx0a2_4Un6ftBMGTxTw8z8=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV87KpIg8HUVdc7WSvg_GKmYTNR6ndpNTaXGBcL6ZX3jQGFsJ7unS9xl1Bw0zClleOLrgrURv7D6hsKXrvZg4tXGD8bB61Kn1lwN-LQxs1OQ6Aq-PRQ=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV84jloVBGDJlYOkjqR_bJO63R4qP2i1TFNuV1OR_pu14O6XBTuTrdOe8LE8IHfjrvzO8aTq8Fay5TKBsOYBM2OAi8UNxmH1yJvqR_5wtR_tgHCPAJ-E=w2400'],
                description:
                    '꽃꽃이를 통해 ‘나만의’ 꽃 바구니 만들기. 재능기부로 꽃꽂이 원데이클래스를 저렴한 가격에 제공(시즌마다 진행 중)입니다.',
            },
            {
                title: '트리 원데이클래스',
                type: '3',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV86u5UYvoJcXVuEhTnt2f_0f50yI6KUwkaMPNRFIWqCQ-Y7hAaubpWmUIDWjMC_0uROWIYhmXYTSmU7wrzqvliaHXegHeFzs1VzTr4DWLr4xUstyONA=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV8430qlTek2Kx9asxHh1j0KbCyLiG1fV_cE-PYV5lGCEHpI_EcmrieIhED6rB3Tw6GGeVsrMkjwnVULu8P42k2XkdY7b3KJGHJRq9v-V3VNFbmg9Pg=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV85E8MSUv8Y8okCP_yeM400w3gDkUMh9gyqBjHWfAC9eSifwnVuCn64BXkYGMRmWva1AkIy7RBKCmyRAJtFpbIsWhO3JPdTYu-XF67gk5p4gPOWOWRE=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV87oV8OE7r_1VEDhcsbxcCOKJo7sxzQSR0D3up23rZfhUIC9KUV56KD28KzcMV2uwv4R4VmeElH8v7SzMeLgafBjfVdnF8y1Gzfq89TTzE5GKOFDoMU=w2400'],
        
                description:
                    '꽃꽂이 통해 ‘나만의’ 트리 만들기. 재능기부로 꽃꽂이 원데이클래스를 저렴한 가격에 제공(시즌마다 진행 중)입니다.',
            },
            {
                title: '풋살대회(동아리)',
                type: '2',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV87dpO7cuJCvoV7fnUeKR1KLz9vtYEX8T_6oNDgcHKbi3aMRPu_NOgDrghLn6N1qJEHATyX80H-TQV2rbxz07gya7nShJyPu0bVDfIGfBVyp3hDGCw=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV86GRb_my9b3AmhhCvtRxEJnKY6n-l4BBXeUizJ58vS4G1LSmHNGvpDiCP2lZ7gdpFZIG0S8erGzvCX-DdgKyfpZdMMtxk-NkWx_U2j7tnqT1wmbyQ=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV87mSgYN-jHePM0QV5GAfSaGYRE-sCwlNspkpEOzY__WqPr2hcwqdHHUD-MHW_KTZm9e3bGjZnYV9ctG7DnuZ27h8P7N9bqgArzieUj91pNoT9y_NQ=w2400'],
                description:
                    '모르는 사람과 플랩은 그만! 청년들의 운동 동아리 확대를 위한 시작! 풋살에 관심있는 청년들 모아서 대회 개최 전국에 있는 풋살 동아리에 참여하여 건강한 문화생활의 첫걸음이 시작됩니다.',
            },
            {
                title: '무나 여름나기(계곡)',
                type: '2',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV86Hej3foqXYPPXhr3wSOb7rdFO6i5MozXWSRUiALl6FXQa38f8y51nv4xPeYgEFCQm_m3G8he_mN7tg1mT-YeyhCnUTGesPctTSXX4y2VfKP9elfA=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV84AcGvE_AvI945nUplP2qr3vwlOfdqeIgP0RiZPstNNdgzNhDXwvHEWKxGOaHeTBbaI-BOeRerSe4CTSTJaqSQLzfuYRSVDwWqfZZ-QQmhfRkDN_A=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV87RFslqCJbUVHxlExlGv7JSR3ap8L-dLIv7ZTOVWh82r0aDcif3iHcSg5QRX7Qw9LwaJ6OGHMmaXu9bb0J0bXEF46lQuJkIlsE3fiQ4o_Hz73k0eA=w2400'],
                description:
                    '무더운 여름 즐거움으로 시원하게 더위를 이겨내보자. 함께 계곡도 가고 다양한 놀이를 통해 에어컨보다 시원한 여름나기 위한 프로젝트입니다.',
            },
            {
                title: '가치사전',
                type: '1',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV84eA1qUYB7YUoOV0uMIqrLxFi2N2vj3CdZ96zi8spYuHnKvX60iSa-z4yGhyRaYHQrx-5rd16DoHwSL522gxGoH0-GvlbIpRhLTX74kYGIrqquap0w=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV84XhhMZNWPPWUPfIfaXpeXrk0RYdIWKlkpRE4gPGjBa56XKzHFUBh5bL9k5TXYDjxYEs8ZiS-NHaoo7riTGsRL9DvgtiZrm9C3_j-3EFQLvWWacJA=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV86hKE0H2o1pgUgcsD4XrCC8PW4K4oeQTlMSYwbKtS3Y9pDGg34QJMsRmUOC_gX0UCmqzboS_N-qT9CKnvW0DxaGGkdCFhvKXRKf4Gn4eKlbzAAE2g=w2400'],
                description:
                    '청년들의 가치있는 삶의 도약을 위한 나의 가치를 찾아보고 생각하지 못한 부분을 함께 나누며 성장하는 세미나입니다.',
            },
            {
                title: '가치오락',
                type: '1',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV84D5uBWWF2j9MEawG-rVMqllnp41msAdG-na_056dR9YODgM3gZa15FijGmZpUYiQtb6VhE4MZpftiNrUhZQfdUZ8CoR5kOzzGkO3vvXxSRC7sgbXw=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV84sWWd_5XvhigBqtaN4BlI8XJ9iENk6jQaaVhaWUvCaXxzMmEkREM1G682ybzmU40PyVZWEgKKVLoCBLXTxjzb5DB-srTkS3hetRjlL41v-De5hyQ=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV86YrY9UXz_sNDrBlHfP8lOoOYZ_TQfLFGV-duDnG9cV2tud8n7Xzdqv8goPG0_cQnTU5zR_-nlea1s_LjvoPZ03lsNsyM5TMiMTaH3cBRfCgAjmxQ=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV87HsvBwmkVzT8Y-3iGxhcega5nlq2SWJtj_HfmPo2mUuNHWmb-n_dgKy4CNNfeY0ONIHYcbYXmzA0IPmAWiZ88MsyfQDyrG9N7vsoOJqvGZgvp8lg=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV86AiuBy8kqUKFnlWIhGVt_x9IVxkWBCgy7dj2xj6k81gBsz48jAC6OH1DjlxjEQMOnWDUPQY4sP79G7cBFuaqAx9XLA83djs63f4zK6XrJXm-67QQ=w2400'],
                description: '다섯가지의 즐거움을 느끼며 건강하게 행복할수 있는 가치관을 세워 볼수 있는 참여형 세미나 입니다',
            },
            {
                title: '향수원데이',
                type: '3',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV872WDBMqYm0KeO5hbImALcdR3S2BWy2LiWpTtYyPM2evJpsBtD0kz9qCaeVZKlBhtXVoz9iDWIUKUXGK-RclOyNy6kIwo_JI3lvL7K2ojDJUDHgLUQ=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV85_GEpzSJACfM81guWi9g1yKYocxdQU1kcOq46Gv8Gwiq_pqcWzemj9Au_pNxCAyB2YY1NGf46wu_eovAZydMIKpWVLgMtQX6bc7U_NSHL6iQc7TMI=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV85npVu4jEV4B75Nh4pDGxZlOfCNpgGhnOjhFFDf9_Dloc0lQluwPlOeVkL_p2hEAtIQfb7y6A1vdGCEJz-m6HEjc9iDMSnNFjrudGhYz3eTJ2is7M4=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV849mR7nYxLdVMTEk0bnEqeftLo3QcBjDPXpn6Ua5xi3pPqICYVfcbLg3c816JD0nN_Sh7AMvM0nhcB2eY0LA4XyLWjO6GatobcifjhIgrCrKUqMgaI=w2400'],
                description: '나만의 퍼스널 향수를 만들면서 나에대한 탐색과 나와 어울리는 센트를 찾아가는 일일클래스 입니다',
            },
            {
                title: '코코아밤원데이',
                type: '3',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV86ok6j6Qe5-j8ACWtTt0CT2FpUwDGNTi739RNxMY0VxontGjIdJ9F8uLfmRqeN9EdzSaGTt2_n0BfWh3AYagI5ijp4UBRuKyjzxEaQjczRTzebn5Hk=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV86zMautbmV0GgoFvEj0ZacAW8NPOyAHGb45yEFgrrSOZZOGT7l5VE7GUDRbuRF_kvOyLLWD9TpDnmhLMGLdqP536OnmT0GZu8C8WT3-wOGgGOwiq4Q=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV84uiti6wZ66K_SAOwMCKH3gkZjHi9trsapqCR_noYXP2R6T90QDVYRzufiiaHL-rTt1OufF4dnUjyofEc_cK52jgwtVx-CpxHejazw0ZS-rfoXdjM0=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV85J1nVeeaqXRcdikxC5l0QR08g7JhaK7G27AUNSEpyN8T0hIU7bOajtMUrenlCi1ahBM6D-4eupJLkTJp1Wm-9YF9ZACXhscxV2tsmERyBkA35WBb0=w2400'],
                description:
                    '크리스마스 이벤트 클래스로 달콤한 코코아밤을 만들며 소중한 지인에게 마음을 표현하는 일일클래스 입니다',
            },
            {
                title: '12인의 성난사람들',
                type: '1',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV876Gf1Kgy_IQ77Kg32jXofb85CsfK5i4FP7VlbQ_ykGh7TbWk-03k5Hkx7dMqpxQxgETwLbVCGr6ygZz0zXsMvc2AL1bW4EuY4bgzu-n9NaO1fWAno=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV876Gf1Kgy_IQ77Kg32jXofb85CsfK5i4FP7VlbQ_ykGh7TbWk-03k5Hkx7dMqpxQxgETwLbVCGr6ygZz0zXsMvc2AL1bW4EuY4bgzu-n9NaO1fWAno=w2400'],
                description: '배우수업을 통한 배움을 통해 만들어낸 연극입니다',
            },
            {
                title: '봄멍',
                type: '2',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV84pvSN25UWx2kNhkNrfa3chOheET6-Y5pFtRL9kzzBMxQ_TngKp-XxyIPNygXKcz9vEConyQjWnJHN-FuEfn18q-VSfwRYQ6ILLkdXFRYY5CQyg2E0=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV84pvSN25UWx2kNhkNrfa3chOheET6-Y5pFtRL9kzzBMxQ_TngKp-XxyIPNygXKcz9vEConyQjWnJHN-FuEfn18q-VSfwRYQ6ILLkdXFRYY5CQyg2E0=w2400'],
                description: '스튜디오 무나의 오프라인 이벤트, 스트레스를 건강하게 해소 할수 있는 봄멍 이벤트 입니다',
            },
            {
                title: '기프티캔 - 북토킹',
                type: '4',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV86ICWRcrbSzaMiHGZMbKK_WTszmvin-R3l2_eB6XsqTLuVU6pW_zKJ5jgSliW-0tHvSpGoQAUOmjgich8HE_wJnMF0EfQW9w-MpCsXyxd7_J-6jG0g=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV85cOZeXvOzZsst3ol5U9A93c6RhW6gkLanbJArcu_2EZFTIgJlGd7-8XFh6z4xmIKLdmPdZWm-Gtaf6RHzQ8ukRrWgwuG9N_8Pf3iGTAyNppKMZ8Fk=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV87FGAS2XP2pCbqNLjsVFnsbv7m9N0dJ6SRr1sizVnGT0sEtfwys3BD44GArhbXynzUfOwSbZcZMmK6EAgZImcGa2ZDdR4kxss5088ragLVKWcZbxz4=w2400'],
                description:
                    'GIFTICAN, gift i can 무나에서 제공하는 내가 하고 싶은 것을 할수 있게 만들어 주는 체험적 프로그램입니다, 고민했지만 읽지 못한 책을 대화 형식으로 이해하며 책의 범주를 넓히는 것에 도움을 드립니다',
            },
            {
                title: '기프티캔 - 연애',
                type: '4',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV85c3CLlyzrcYKJpabtSeKdnGGcGaH6vh1_wsWwZ2C-AP9HJytLHbeAGx76ygj6OP0IHa7xRRE0eDMwQoTaig2ksQbBCg3ds-dTPVghShAi48dZDX-g=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV86dqR41E8UYVK6JxYnKl0LJPyBUDvrtbntc99gJcPrMJon7tHIcVfgZaEnIZz__K3jqhhqq-BmKzVFxgWkasXbDd-u9GffO52CshBlLaUJp6fefNw4=w2400'],
                description:
                    'GIFTICAN, gift i can 무나에서 제공하는 내가 하고 싶은 것을 할수 있게 만들어 주는 체험적 프로그램입니다, 자기 탐색의 시간과 대화를 통해 연애 라는 주제에 다양한 측면의 이해를 도와드립니다',
            },
            {
                title: '기프티캔 - 습관',
                type: '4',
                imgurls: [
                    'https://lh3.googleusercontent.com/pw/ABLVV86lwMxNzPXPJd7rT9kGLLIFK6K7E6AHPx_7lckEkd60smsNX_2EV30czQWPIEapcwdX4uzBAtChKzhNTT85lQqmIYx53ITx3mdHKkhqN6-ypErD3LQ=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV87hzayt3SIto0reU3LguX4xMHuNq6bztAQuCCKYrA0yZ-93ZHHAD2ExfvIs5tSv1NtcDQf_MYFb2P_cfzym2LiBA7PuWMawkVVBR-J4diMAa82ufNQ=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV861vWdk15j-VMSOoT8sBiMisFDTtmloOvUzZqYChkdi25qnORBFO4w9cNWa-ikF6YNqrgiFjt6e_bTnOJZgEOcKWcLfbM1Y_yI0I6uDtR4YkebGxFw=w2400',
                    'https://lh3.googleusercontent.com/pw/ABLVV86uNYz24VIQfVSYT89Xqm_e1aoU2UYn8cLVOLPan4gfoXKK4LKmpITi9S6Q3j8k9WM9kJCc0tij8sgDM3wnkk6hJpwR4EwrwcZjasFyoMu6eUrrNeE=w2400'],
                description:
                    'GIFTICAN, gift i can 무나에서 제공하는 내가 하고 싶은 것을 할수 있게 만들어 주는 체험적 프로그램입니다, 습관성형 챌린지로 3명정도의 크루를 조성하여 내가 만들고 싶은 나의 목표를 이룰 수 있게 도와드립니다',
            },
        
    ];

    
    for (let program of contentData) {
        const { title, type, imgurls, description } = program;
  
        const { data, error } = await supabase
          .from('programs')
          .insert([{ title, type, imgurls, description }])
          .select(); // 여기서 삽입된 데이터 확인
  
        if (error) {
          console.error('Insert error:', error);
          return res.status(500).json({ error: 'Insert error: ' + error.message });
        } else {
          console.log('Inserted:', data); // 서버 터미널에서 확인 가능!
        }
      }
  
      return res.status(200).json({ message: 'Programs added successfully!' });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  };
  
  export default insertPrograms;