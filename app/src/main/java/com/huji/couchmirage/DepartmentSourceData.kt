package com.huji.couchmirage

class DepartmentSourceData {
    companion object {

        fun createDataSet(): ArrayList<Department> {
            val list = ArrayList<Department>()
            list.add(
                Department(
                    "BABY & CHILDREN PRODUCTS",
                    "https://as2.ftcdn.net/jpg/01/32/53/23/500_F_132532302_hp9DZ7y8BPTaRMMFME0aSysBThQCORCv.jpg"
                )
            )
            list.add(
                Department(
                    "BATHROOM STORAGE",
//                    "https://www.flaticon.com/premium-icon/icons/svg/2984/2984941.svg"
                    "https://www.flaticon.com/premium-icon/icons/svg/3172/3172961.svg"
                )
            )

            list.add(
                Department(
                    "BEDS & MATTRESSES",
                    "https://www.flaticon.com/premium-icon/icons/svg/2924/2924432.svg"
                )
            )
            list.add(
                Department(
                    "CHAIRS",
                    "https://www.flaticon.com/premium-icon/icons/svg/2944/2944110.svg"
                )
            )
            list.add(
                Department(
                    "CLOTHES STORAGE",
                    "https://www.flaticon.com/premium-icon/icons/svg/343/343594.svg"
                )
            )
//            list.add(
//                Department(
//                    "DECORATION",
//                    "https://www.pngegg.com/en/png-nydtr"
//                )
//            )

            list.add(
                Department(
                    "DESKS",
                    "https://www.flaticon.com/premium-icon/icons/svg/3015/3015596.svg"
                )
            )

            list.add(
                Department(
                    "KITCHEN CABINETS & APPLIANCES",
                    "https://www.flaticon.com/premium-icon/icons/svg/2851/2851928.svg"
                )
            )
            list.add(
                Department(
                    "LIGHTNING",
                    "https://www.flaticon.com/premium-icon/icons/svg/3002/3002060.svg"
                )
            )

            list.add(
                Department(
                    "MIRRORS",
                    "https://www.flaticon.com/premium-icon/icons/svg/1914/1914668.svg"
                )
            )

            list.add(
                Department(
                    "OUTDOOR FURNITURE",
                    "https://www.flaticon.com/premium-icon/icons/svg/2007/2007775.svg"
                )
            )
            list.add(
                Department(
                    "SMALL STORAGE",
                    "https://www.flaticon.com/premium-icon/icons/svg/3108/3108815.svg"
                )
            )
            list.add(
                Department(
                    "SOFAS & ARMCHAIRS",
                    "https://www.flaticon.com/premium-icon/icons/svg/2944/2944055.svg"
                )
            )
//            list.add(
//                Department(
//                    "TV & MEDIA FURNITURE",
//            "https://www.pngegg.com/en/png-nydtr"
//                )
//            )

            list.add(
                Department(
                    "STORAGE FURNITURE",
                    "https://www.flaticon.com/premium-icon/icons/svg/3067/3067721.svg"
                )
            )
            list.add(
                Department(
                    "TABLES",
                    "https://www.flaticon.com/premium-icon/icons/svg/2198/2198722.svg"
                )
            )

            return list
        }
    }
}
