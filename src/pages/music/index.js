import Header from "~components/Header";
import Category from "~containers/Collections/Category";

const data = [
    {
        title: "Leftoverz",
        profileImage: "https://i.seadn.io/gae/n8LPXDL9JrHqT0oyXsQyFSJOkv7t7RbtHG1U2EjBATVH-OYc26Vba9GHuawasrwyOeM5JxTMhgVaTdG-_cJCzZotvSbPw9e9nwJ40w?auto=format&w=1920",
        productImage: "https://i.seadn.io/gae/n8LPXDL9JrHqT0oyXsQyFSJOkv7t7RbtHG1U2EjBATVH-OYc26Vba9GHuawasrwyOeM5JxTMhgVaTdG-_cJCzZotvSbPw9e9nwJ40w?auto=format&w=1920"
    },
   
    {
        title: "Kiko Bakes",
        productImage: "https://i.seadn.io/gcs/files/a7a97d0197862c6611893b73da2a40dc.jpg?auto=format&w=1920",
        profileImage: "https://i.seadn.io/gcs/files/c2a8e25e59b32b60e0865e2abad1eef0.jpg?auto=format&w=256"
    },
    {
        title: "1BITS Official",
        profileImage: "https://i.seadn.io/gcs/files/87d02fa109711b4d8778a186c99682ce.png?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/ad80e1edf5a69d75a13021304915e74b.png?auto=format&w=1920"
    },
    {
        title: "The Chimpsons Official",
        profileImage: "https://i.seadn.io/gcs/files/2fcc60cfe712bf9d62a1f521e8f952ad.jpg?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/dc82b2d34c88cd5bfef5478163a52a24.png?auto=format&w=1920"
    },
    {
        title: "The Infernals NFT",
        profileImage: "https://i.seadn.io/gcs/files/7d49cf26d64ec8491465679198c3b893.png?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/cb7d49b03502e65e6e618c4a18d08240.jpg?auto=format&w=1920"
    },
    {
        title: "Leftoverz",
        profileImage: "https://i.seadn.io/gae/XvTMloYdyEv8jP17LB2_Ik_8ojbn8Of0fEr6j2fUjvqD3EtXVjqZ5szAoHmeYOQqccLaifqt4hcmcDS1S9gu7hMmw6Ad5asMUd1f?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/tmQz-JJ1jWZ53YiBHrIcWNcgbXjfv7h5eGkLP6OKAo-S-ZqXQhl6mojj6ypoWHhvOI5hMEzJpnh4AgeiAEbTGg3jHD2bRFp7JgIe?auto=format&w=1920"
    },
    {
        title: "The Memes by 6529",
        profileImage: "https://i.seadn.io/gcs/files/8573c42207ea4d7dc1bb6ed5c0b01243.jpg?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/422be663d7ec0bf67cbe6c2d6484f32c.jpg?auto=format&w=1920"
    },
    {
        title: "Purple Crystals V2",
        profileImage: "https://i.seadn.io/gae/vb20I7MpI0O6-b8mexl3HtLB3RnDZYfppi_0ZSRblnLekBYXGcMQtVc6pMAyUcyiANiYFYx0__gYcL8EpZ-6qjRR3fbNWKnbs4RSoA?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/ab96094750de9a85086ff5c4e55a2d99.png?auto=format&w=1920"
    },
    {
        title: "YuGiYn",
        profileImage: "https://i.seadn.io/gcs/files/fb756068f5be3cf135f7c5ef211d08c6.png?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/49a403363ec53020ecb67cb88bc4ba64.png?auto=format&w=1920"
    },
    
    {
        title: "Purple Crystals V2",
        profileImage: "https://i.seadn.io/gae/xnw7sKMf34Icv0_47NEz6xwXBMXMEaXvs1Yw3MBPmWkG1P7SA9591T-Kti9zGiclgcb_seFOlbMOYzBjbTwUqn8wionmr5WkIz86gQ?auto=format&w=1920",
        productImage: "https://i.seadn.io/gae/xnw7sKMf34Icv0_47NEz6xwXBMXMEaXvs1Yw3MBPmWkG1P7SA9591T-Kti9zGiclgcb_seFOlbMOYzBjbTwUqn8wionmr5WkIz86gQ?auto=format&w=1920"
    },
 
    {
        title: "Cool Monkey V4",
        profileImage: "https://i.seadn.io/gcs/files/755af903a60a3dd49074334c86fab887.png?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/7f95536cb6230eef274a60a4b4a8d99e.png?auto=format&w=1920"
    },
    {
        title: "poobsnft",
        profileImage: "https://i.seadn.io/gcs/files/67e2b98c6716999ccd49da97db715b67.png?auto=format&w=256",
        productImage: "https://i.seadn.io/gcs/files/b4b6f06e464c5a47c51a2782db5c69ec.png?auto=format&w=1920"
    },
    {
        title: "MORTYBEAR",
        profileImage: "https://i.seadn.io/gae/kMVcTy0HKYRkevj4AkM9x7usYDDxZDZcqcsT-4fwMqvrVqGErxMAtHbRPgDnwZGSREDTmksGGuguzWaTcuD-CQpPVJFE33GhW7HyZg?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/KG4ofAk_TNX33TGyVx2utEGWinMANYWlqHWcIXPIiDU8eemiY_5ofJAkG7AQtdTbceBmqud9kQxE-SwkL54vUqHWsUKPXGzNDLrC?auto=format&w=1920"
    },
    
    {
        title: "Made by Metaplex",
        profileImage: "https://i.seadn.io/gae/nO71D1iBJic5oI9QDtXjLfLNG_tx_SXkq64RihXptxV6gdznmV-uoVU58o37mGB_4Vue-YCAiezseaKT4WT3H96RsOi_qrI7L9iOoA?auto=format&w=256",
        productImage: "https://i.seadn.io/gae/HSGZUUwd1ALvuwxD_2E4Fg22rK4o7-v-RXNHBbWZ1OLIrR8cSfehKqe1ZA2jOAKoCqbsqVh3BDwu6iHPtw7tS6CI9wPhRqhC_H48pg?auto=format&w=1920"
    },
    {
        title: "Made by Metaplex",
        profileImage: "https://i.seadn.io/gae/hAutyBfgty5wvBALfA2jebrIRjSgElYNNkHBheEtcvWESAxtdOV5B0teMrRa9EWufDIbbUeNwh6wVirm4IebB_nykzlqj3Jnl1Cydw?auto=format&w=1920",
        productImage: "https://i.seadn.io/gae/hAutyBfgty5wvBALfA2jebrIRjSgElYNNkHBheEtcvWESAxtdOV5B0teMrRa9EWufDIbbUeNwh6wVirm4IebB_nykzlqj3Jnl1Cydw?auto=format&w=1920"
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
   
  
    
]

const artCollection = () => {
    return (
        <>
            <Header bg={true} />
            <Category text={<>Own collections from some of the biggest names in music, plus discover incredible work from new and upcoming artists.</>} data={data} title="Explore Music NFTs" banner="https://i.seadn.io/gae/AvQukLHo8LVt8fcDkRPi8vxqJ3GUVi6XgKPIR_Z0HFl_JM5PENkOgDwXXA7sWvGGL1ij_tpWGlfiynlN9qdx5YS95wWiHBSidAIcJLc?auto=format&w=828"/>
        </>
    )
}

export default artCollection