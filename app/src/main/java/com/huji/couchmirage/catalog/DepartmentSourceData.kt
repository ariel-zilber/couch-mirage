package com.huji.couchmirage.catalog

class DepartmentSourceData {
    companion object {

        fun createDataSet(): ArrayList<Department> {
            val list = ArrayList<Department>()
            list.add(
                Department(
                    "BABY & CHILDREN PRODUCTS",
                    "https://img.icons8.com/windows/96/000000/rattle.png"
                )
            )
            list.add(
                Department(
                    "BATHROOM STORAGE",
//                    "https://www.flaticon.com/premium-icon/icons/svg/2984/2984941.svg"
                    "https://img.icons8.com/windows/96/000000/shower-and-tub.png"
                )
            )

            list.add(
                Department(
                    "BEDS & MATTRESSES",
                    "https://img.icons8.com/windows/96/000000/bed.png"
                )
            )

            list.add(
                Department(
                    "CHAIRS",
                    "https://img.icons8.com/windows/96/000000/chair.png"
                )
            )
            list.add(
                Department(
                    "CLOTHES STORAGE",
                    "https://img.icons8.com/windows/96/000000/sliding-door-closet.png"
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
                    "https://img.icons8.com/windows/96/000000/desk.png"
                )
            )

            list.add(
                Department(
                    "KITCHEN CABINETS & APPLIANCES",
                    "https://img.icons8.com/windows/96/000000/kitchen-room.png"
                )
            )
            list.add(
                Department(
                    "LIGHTNING",
                    "https://img.icons8.com/windows/96https://img.icons8.com/windows/96/000000/interior-mirror.png/000000/lamp.png"
                )
            )

            list.add(
                Department(
                    "MIRRORS",
                    "https://img.icons8.com/windows/96/000000/interior-mirror.png"
                )
            )

            list.add(
                Department(
                    "OUTDOOR FURNITURE",
                    "https://img.icons8.com/windows/96/000000/picnic-table.png"
                )
            )
            list.add(
                Department(
                    "SMALL STORAGE",
                    "https://img.icons8.com/windows/96/000000/bureau.png"
                )
            )
            list.add(
                Department(
                    "SOFAS & ARMCHAIRS",
                    "https://img.icons8.com/windows/512/000000/sofa.png"
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
                    "https://img.icons8.com/windows/96/000000/closet.png"
                )
            )
            list.add(
                Department(
                    "TABLES",
                    "https://img.icons8.com/windows/96/000000/table.png"
                )
            )

            return list
        }
    }
}
