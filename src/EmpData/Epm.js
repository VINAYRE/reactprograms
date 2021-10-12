import React, { Component } from 'react'
class Epm extends Component {
    state={
        Empdata:[{"id":1,"name":"Kerry","email":"khayter0@yale.edu","gender":"Male"},
        {"id":2,"name":"Stafford","email":"stanser1@apache.org","gender":"Agender"},
        {"id":3,"name":"Brocky","email":"bsuffe2@xrea.com","gender":"Agender"},
        {"id":4,"name":"Thatcher","email":"tinstone3@aboutads.info","gender":"Genderqueer"},
        {"id":5,"name":"Malachi","email":"mscranedge4@loc.gov","gender":"Non-binary"},
        {"id":6,"name":"Spense","email":"speasnone5@disqus.com","gender":"Bigender"},
        {"id":7,"name":"Rozalie","email":"rbellon6@printfriendly.com","gender":"Bigender"},
        {"id":8,"name":"Alphonse","email":"acutford7@columbia.edu","gender":"Polygender"},
        {"id":9,"name":"Isa","email":"ibinge8@booking.com","gender":"Genderfluid"},
        {"id":10,"name":"Rutherford","email":"rcammocke9@phpbb.com","gender":"Agender"},
        {"id":11,"name":"Felix","email":"fgartona@homestead.com","gender":"Non-binary"},
        {"id":12,"name":"Tressa","email":"tbrotherhoodb@mozilla.com","gender":"Female"},
        {"id":13,"name":"Carter","email":"chakewellc@mashable.com","gender":"Male"},
        {"id":14,"name":"Tatiana","email":"tbanbridged@hp.com","gender":"Agender"},
        {"id":15,"name":"Merralee","email":"meptone@discovery.com","gender":"Genderqueer"},
        {"id":16,"name":"Emogene","email":"egolsworthyf@miitbeian.gov.cn","gender":"Male"},
        {"id":17,"name":"Meris","email":"mmcmacking@imdb.com","gender":"Genderqueer"},
        {"id":18,"name":"Sisely","email":"smunghamh@arizona.edu","gender":"Polygender"},
        {"id":19,"name":"Ninetta","email":"nblackeslandi@uiuc.edu","gender":"Female"},
        {"id":20,"name":"Dave","email":"deakleej@flickr.com","gender":"Polygender"}]
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                     <th>id</th> 
                                    <th>name</th>
                                    <th>email</th>
                                    <th>gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Empdata.map((emp)=>{
                                    return(
                                        <tr>
                                            <td>{emp.id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.gender}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Epm
