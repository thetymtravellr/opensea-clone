import Header from "~components/Header";
import Category from "~containers/Collections/Category";
const data = [
    {
        title: "Gangster All Star Evolution",
        productImage: "https://i.seadn.io/gcs/files/e775970ddd4cedeb7a37a83055293f2c.png?auto=format&w=1920",
        profileImage: "https://i.seadn.io/gcs/files/e3d12b7b71c75a02256f9d34fe35824e.gif?auto=format&w=256"
    },
    {
        title: "TombStoned High Society",
        profileImage: "https://i.seadn.io/gae/HLKh0HH_zS0IMsMvDjadsbhzxt9WZTACK2LzZiX1u4gBuS6kFkg1hRtWLctu3h3XdpuKLh-3UrcwPM1aL6jjQxIPXOHp_oLTCeVi?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/yXZzV_wUgFmGH3UEtr6FXNcQfoKbMG4g846a2sxCsWo7gUyjWmrj7n0zvxV5C-f2JUoFx1RlWRrFy2VE1pAsX6neBOtDxgCHJV33?auto=format&w=1920"
    },
    {
        title: "Teddies",
        profileImage: "https://i.seadn.io/gcs/files/4ceedde5084d9014bd47e4c79b962ea6.png?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/fea1bffd1fb96df901bfd355b30a86f4.jpg?auto=format&w=1920"
    },
    {
        title: "Beyond Earth Characters",
        profileImage: "https://i.seadn.io/gcs/files/2b32751ba7e63cc3e3ce985afaf10dec.gif?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/7b948da80f7b32c33c465d495f6408bc.png?auto=format&w=1920"
    },
    {
        title: "StreetMachine",
        profileImage: "https://i.seadn.io/gcs/files/0303d12a13c8145fba2e809ab1c477a0.jpg?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/48103ac66a28ebc38806f04d1890a16d.jpg?auto=format&w=1920"
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
        title: "Rotten Anti Social Club",
        profileImage: "https://i.seadn.io/gcs/files/ac158df2f2590f9b0d32e3b65c1f12c4.png?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/de604fd55e2c15f7a5b49ea74458b2fb.jpg?auto=format&w=1920"
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
        title: "Fat Rat Mafia",
        profileImage: "https://i.seadn.io/gcs/files/40fbac029b1d5000ff516326a70f31e8.gif?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/40b7f6e81468c8513859f1bb070aa1df.png?auto=format&w=1920"
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
        title: "Corntown wtf",
        profileImage: "https://i.seadn.io/gcs/files/a44712ea177438675a52223fc593dc20.png?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/bfa6e4e181f3e34599f1aebcdb9c4e6e.png?auto=format&w=1920"
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
            <Category text={<>Secure your spot in one of the many virtual worlds and alternate realities, where you can own land parcels, wearables, and more.</>} data={data} title="Explore Virtual World NFTs" banner="https://i.seadn.io/gae/no-hL6XVnGKTaf7lvLyVaHBnK3wKUWfLP2FPbbxMm6yjosTCtTvPoK6gZnCEkw3NtXFINpKFcqy0JS9UYuu2S-WAnlVnOiB4r-P3?auto=format&w=1920"/>
        </>
    )
}

export default artCollection