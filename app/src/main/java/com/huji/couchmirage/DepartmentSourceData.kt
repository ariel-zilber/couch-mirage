package com.huji.couchmirage

class DepartmentSourceData {
    companion object {

        fun createDataSet(): ArrayList<Department> {
            val list = ArrayList<Department>()
            list.add(
                Department(
                    "BABY & CHILDREN PRODUCTS",
                    "https://raw.githubusercontent.com/mitchtabian/Blog-Images/master/digital_ocean.png"
                )
            )
            list.add(
                Department(
                    "BATHROOM STORAGE",
                    "https://raw.githubusercontent.com/mitchtabian/Blog-Images/master/digital_ocean.png"
                )
            )

            list.add(
                Department(
                    "BEDS & MATTRESSES",
                    "https://raw.githubusercontent.com/mitchtabian/Blog-Images/master/digital_ocean.png"
                )
            )
            list.add(
                Department(
                    "CHAIRS",
                    "https://raw.githubusercontent.com/mitchtabian/Blog-Images/master/digital_ocean.png"
                )
            )
            list.add(
                Department(
                    "CLOTHES STORAGE",
                    "https://www.pngegg.com/en/png-nydtr"
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
                    "https://www.pngegg.com/en/png-nydtr"
                )
            )

            list.add(
                Department(
                    "KITCHEN CABINETS & APPLIANCES",
                    "https://www.pngegg.com/en/png-nydtr"
                )
            )
            list.add(
                Department(
                    "LIGHTNING",
                    "https://www.pngegg.com/en/png-nydtr"
                )
            )

            list.add(
                Department(
                    "MIRRORS",
                    "https://www.pngegg.com/en/png-nydtr"
                )
            )

            list.add(
                Department(
                    "OUTDOOR FURNITURE",
                    "https://www.pngegg.com/en/png-nydtr"
                )
            )
            list.add(
                Department(
                    "SMALL STORAGE",
                    "https://www.pngegg.com/en/png-nydtr"
                )
            )
            list.add(
                Department(
                    "SOFAS & ARMCHAIRS",
                    "https://www.pngegg.com/en/png-nydtr"
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
                    "https://www.pngegg.com/en/png-nydtr"
                )
            )
            list.add(
                Department(
                    "TABLES",
                    "https://www.pngegg.com/en/png-nydtr"
                )
            )

            return list
        }
    }
}
