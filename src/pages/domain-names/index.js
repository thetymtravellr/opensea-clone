import Header from "~components/Header";
import Category from "~containers/Collections/Category";

const data = [
    {
        title: "Portals",
        productImage: "https://i.seadn.io/gae/0pCL_miDCOlLdNO35DhrFm9ez1OCE3YE2nBgYxqjCSMyw53GB9iNwadLUrVTzZTuK7AK52Cx-kFjxipmctskYl4THBvZ1qeamZITyIw?auto=format&w=1920",
        profileImage: "https://i.seadn.io/gae/M-lW46K8vEBZZbFPPmW8oc8ugQnVRP7YxOOG8TyTDwKmSAD_6YgqQ9-VZYzJFC8Objri8XJP6Dps8kJ5Lvw6XCHDtGxKxT9Uhvtk9fA?auto=format&w=256"
    },
    {
        title: "Easy Elves",
        profileImage: "https://i.seadn.io/gae/ujTMHw279R6dyoT7sEAA8TBMRJAQWUrQq_yTrUaPoDuAPKR7DAgORqsa8cQCtMD_MyCWnNywUlU07lTXprUKMUuS1dl6MYWRZ5IQ?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/wc294Hr2SFdn4uRvND8OL0zvNBZvTVf0SuRy6fwC6SSNK3xhhYYEkQE7WxhfuxSCYqH_ZLzP5WYhHyXWl5xy7TR5TxGH38PlJS906g?auto=format&w=1920"
    },
    {
        title: "MORTYBEAR",
        profileImage: "https://i.seadn.io/gcs/files/998b7cb32192509c7db87f74f8043d5f.jpg?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/0c2f0fdfb3f8a6ae79ccc9b6c2f67f88.jpg?auto=format&w=1920"
    },
    {
        title: "Purple Crystals V2",
        profileImage: "https://i.seadn.io/gae/cgFAvnBcqoDZCIPUgRdYGQGdPR5HFBHgXOfKsc4-r-1Cpw9a1GEnKELv48wTF5BInT6J5Fyvu-J0ZDEIjb57YaWiwsIhh7k095sxQfE?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/dZb4xpEN7Hc8YUKrhXtACfuY-wYDj4rhpPsXpc1_wfFO0MKPkdJZjbGu04PSkdZDva_t2CQthndtpFUQerD4sox5IB30-jD9QEITaA?auto=format&w=1920"
    },
    {
        title: "Leftoverz",
        profileImage: "https://i.seadn.io/gcs/files/b0e6d6cbab7e2dedd84233ac8587a82f.gif?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/8404e52cadcc6c7b12b19fee978e8402.jpg?auto=format&w=1920"
    },
    {
        title: "Made by Metaplex",
        profileImage: "https://i.seadn.io/gcs/files/b4642546b68136d3c52b6b402c489f34.png?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/rd_nkdv8TI5uMuiwHrJmOR-TcgXLcJwCc9jBjVJoILik71l98mGQlZeQXmjEA0UKQNM83f-ukF2_nCr82G0rDT5mW1rP7n_ooz1U8Q?auto=format&w=1920"
    },
    {
        title: "Critters Cult",
        profileImage: "https://i.seadn.io/gae/gRSzhQDZEhYJys7z2tstXwunuijtKBYVuomSHTTQJhUsNnxzhyhySO6qzizWA44xFTO3r2HNyWhYK8KFYd7MNHovXlG6WfJKRb1cFFE?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/wMrQOD9J3_gKK8CrM7Zz8VL7ZdIH2KTpyRQ9yY4EODgKQZ7xOD4bu0UQ3JNj_O9L_pVIYPnZRUdL7EYDKyDwrrus-BHyK3wSoh3-aWE?auto=format&w=1920https://i.seadn.io/gae/m4s_XM2EL9vfh2--jzWeVmeaoXTGB_kQAuLbEPsTABqb7jsdAR7HO4NhcTatEZwYT6_E4Vx4vEro2KBut5Xkk8wxsYDSm6UsLg2b9A?auto=format&w=1920"
    },
    {
        title: "Easy Elves",
        profileImage: "https://i.seadn.io/gcs/files/385618e0746df4d457aa5ebc5dcfd08b.jpg?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/dbe6a25e22c60d534cfabfa2c0eeb9db.jpg?auto=format&w=1920"
    },
    {
        title: "MORTYBEAR",
        profileImage: "https://i.seadn.io/gae/kMVcTy0HKYRkevj4AkM9x7usYDDxZDZcqcsT-4fwMqvrVqGErxMAtHbRPgDnwZGSREDTmksGGuguzWaTcuD-CQpPVJFE33GhW7HyZg?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/KG4ofAk_TNX33TGyVx2utEGWinMANYWlqHWcIXPIiDU8eemiY_5ofJAkG7AQtdTbceBmqud9kQxE-SwkL54vUqHWsUKPXGzNDLrC?auto=format&w=1920"
    },
    {
        title: "Purple Crystals V2",
        profileImage: "https://i.seadn.io/gae/vb20I7MpI0O6-b8mexl3HtLB3RnDZYfppi_0ZSRblnLekBYXGcMQtVc6pMAyUcyiANiYFYx0__gYcL8EpZ-6qjRR3fbNWKnbs4RSoA?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/ab96094750de9a85086ff5c4e55a2d99.png?auto=format&w=1920"
    },
    {
        title: "Leftoverz",
        profileImage: "https://i.seadn.io/gae/XvTMloYdyEv8jP17LB2_Ik_8ojbn8Of0fEr6j2fUjvqD3EtXVjqZ5szAoHmeYOQqccLaifqt4hcmcDS1S9gu7hMmw6Ad5asMUd1f?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/tmQz-JJ1jWZ53YiBHrIcWNcgbXjfv7h5eGkLP6OKAo-S-ZqXQhl6mojj6ypoWHhvOI5hMEzJpnh4AgeiAEbTGg3jHD2bRFp7JgIe?auto=format&w=1920"
    },
    {
        title: "Made by Metaplex",
        profileImage: "https://i.seadn.io/gae/nO71D1iBJic5oI9QDtXjLfLNG_tx_SXkq64RihXptxV6gdznmV-uoVU58o37mGB_4Vue-YCAiezseaKT4WT3H96RsOi_qrI7L9iOoA?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/HSGZUUwd1ALvuwxD_2E4Fg22rK4o7-v-RXNHBbWZ1OLIrR8cSfehKqe1ZA2jOAKoCqbsqVh3BDwu6iHPtw7tS6CI9wPhRqhC_H48pg?auto=format&w=1920"
    },
    {
        title: "Critters Cult",
        profileImage: "https://i.seadn.io/gae/HLKh0HH_zS0IMsMvDjadsbhzxt9WZTACK2LzZiX1u4gBuS6kFkg1hRtWLctu3h3XdpuKLh-3UrcwPM1aL6jjQxIPXOHp_oLTCeVi?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/yXZzV_wUgFmGH3UEtr6FXNcQfoKbMG4g846a2sxCsWo7gUyjWmrj7n0zvxV5C-f2JUoFx1RlWRrFy2VE1pAsX6neBOtDxgCHJV33?auto=format&w=1920"
    },
    {
        title: "Easy Elves",
        profileImage: "https://i.seadn.io/gcs/files/8c244157d1ebfb8b17452409c75bf030.jpg?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/a3dd0f1ba52c0c54aeae8cee912fd1f1.jpg?auto=format&w=1920"
    },
    {
        title: "MORTYBEAR",
        profileImage: "https://i.seadn.io/gae/hI7EGdgow9ik1gZ9H_-9btJIi1gH1DK3f4J90XfyGOsMDe_h5BSM5lK9b_gICLkdzTuNECWNfuXBc8PFzhI0t63-wpF8buHvzZeRtw?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/jLG_4IhatONiQ3YKfnFtQFs6aa4WR7b9ofmS_BXIjmRwMLrfd6RMX6SROJuhQU1ZLoJUciRs0bP-seiLoux29KN3jXSw9MqB9ynl1bg?auto=format&w=1920"
    },
    {
        title: "Purple Crystals V2",
        profileImage: "https://i.seadn.io/gae/xnw7sKMf34Icv0_47NEz6xwXBMXMEaXvs1Yw3MBPmWkG1P7SA9591T-Kti9zGiclgcb_seFOlbMOYzBjbTwUqn8wionmr5WkIz86gQ?auto=format&w=1920",
        productImage: "https://i.seadn.io/gae/xnw7sKMf34Icv0_47NEz6xwXBMXMEaXvs1Yw3MBPmWkG1P7SA9591T-Kti9zGiclgcb_seFOlbMOYzBjbTwUqn8wionmr5WkIz86gQ?auto=format&w=1920"
    },
    {
        title: "Leftoverz",
        profileImage: "https://i.seadn.io/gae/n8LPXDL9JrHqT0oyXsQyFSJOkv7t7RbtHG1U2EjBATVH-OYc26Vba9GHuawasrwyOeM5JxTMhgVaTdG-_cJCzZotvSbPw9e9nwJ40w?auto=format&w=1920",
        productImage: "https://i.seadn.io/gae/n8LPXDL9JrHqT0oyXsQyFSJOkv7t7RbtHG1U2EjBATVH-OYc26Vba9GHuawasrwyOeM5JxTMhgVaTdG-_cJCzZotvSbPw9e9nwJ40w?auto=format&w=1920"
    },
    {
        title: "Made by Metaplex",
        profileImage: "https://i.seadn.io/gae/hAutyBfgty5wvBALfA2jebrIRjSgElYNNkHBheEtcvWESAxtdOV5B0teMrRa9EWufDIbbUeNwh6wVirm4IebB_nykzlqj3Jnl1Cydw?auto=format&w=1920",
        productImage: "https://i.seadn.io/gae/hAutyBfgty5wvBALfA2jebrIRjSgElYNNkHBheEtcvWESAxtdOV5B0teMrRa9EWufDIbbUeNwh6wVirm4IebB_nykzlqj3Jnl1Cydw?auto=format&w=1920"
    },
]

const artCollection = () => {
    return (
        <>
            <Header bg={true} />
            <Category text={<>Own crypto domain names from popular services including Ethereum Name Service (ENS), Unstoppable Domains, Decentralized Names, and others.</>} data={data} title="Explore Domain Name NFTs" banner="https://i.seadn.io/gae/eSyL2ho1uDpSXApV-VHWTCR9xaV4wckPvBIh4rhz3gaBDzEVX1ElT5JWySJRPJKIxiZSnKdcCMlgk6PCfeh9D7a3TQmKeZ3o-1cF?auto=format&w=1920"/>
        </>
    )
}

export default artCollection