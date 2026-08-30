const admin = require('./firebaseAdmin');
async function seed() {
  const db = admin.firestore();
  const links = {
    "bee-unit1": "https://www.youtube.com/watch_videos?video_ids=XrHtU713vJA,Abgy3ITy2_Q,HXA6FFtZKY4,u5hx9L1ndaU,TaqJ4OYqv3A,aZIizOWnuB8,XrHtU713vJA,LyPJHijxWgk,Abgy3ITy2_Q,HXA6FFtZKY4,LyPJHijxWgk,2pqD9Q3Gh0w,bw8_uOnrF_E,UvCugO4b7mI",
    "bee-unit2": "https://www.youtube.com/watch_videos?video_ids=jshrjYY8544,B1RWnzvzrDI,Xtt_H9Afasw,YyAxHOGOkZU,t84h_XKoR6M,f95eLukESvA,Qv_shku2Rx0,Onk9ngTpWrc,qWkjp2e4_mQ,sTgP2B40WMM,PofIb8201DM,935pdDuB7QQ,935pdDuB7QQ,e6HdejWlItY,e6HdejWlItY,j7guBvAFqGY,lV8hJOuQcF0",
    "bee-unit3": "https://www.youtube.com/watch_videos?video_ids=TyuI-IqNfHg,6E19al9dEno,TyuI-IqNfHg,TyuI-IqNfHg,TyuI-IqNfHg,e2_p5Rc17RQ,6E19al9dEno,e2_p5Rc17RQ,6E19al9dEno,0GHkAVJra-E,0GHkAVJra-E,0GHkAVJra-E,Abgy3ITy2_Q,Abgy3ITy2_Q",
    "bee-unit4": "https://www.youtube.com/watch_videos?video_ids=v6RZcI1CrCg,B_XW4FIGI-E,0GHkAVJra-E,e2_p5Rc17RQ,v6RZcI1CrCg,v6RZcI1CrCg,v6RZcI1CrCg,v6RZcI1CrCg",
    "bee-unit5": "https://www.youtube.com/watch_videos?video_ids=5ljmD7kHQuI,y4SiF9QSDs0,HLUpbW3C8C8,S9aRRIVS1ec,oz8sRnnO5Q4,S9aRRIVS1ec,SdWM_jSu0PY,ZWRbU_nTMgA,lcvDixHYA10,seysPzL6igI,UOEC8FijUFQ,zob0SjIEA4s,_tvMPIn59nQ,YD8AS7dF3eQ",
    "beee-unit1": "http://www.youtube.com/watch_videos?video_ids=XrHtU713vJA,Abgy3ITy2_Q,HXA6FFtZKY4,tndrf6ZNS2Q,LyPJHijxWgk,u5hx9L1ndaU,TaqJ4OYqv3A,aZIizOWnuB8,AHHa448vR0g,UvCugO4b7mI,bw8_uOnrF_E,8LluX7KKncU,2J9RbvlY36E,yqfciPhsuu0,d9sgmYy2PDQ,mlWjdE7JFHw,_h62NLQ33DA,X9t50SsU1c8,-XxrRHIV7JQ,2pqD9Q3Gh0w,JeanJRnvBPk,T7MJpfhXGjs,7G9Bm-kdLfI,1rCm5UCQHPI,1icXtW97tIo,tRnMdI_zjnc,ik-Dx3L-br8,emYhljHMNvo,jNuEWmh9YB0,5pMQaQnoA7s,EA73HDnLQ1I,UpqKY81jTVM",
    "beee-unit2": "http://www.youtube.com/watch_videos?video_ids=PofIb8201DM,Jy_9Y8cVMVI,jshrjYY8544,UkOTck6GhIU,B1RWnzvzrDI,WI8Sge3qFHo,Xtt_H9Afasw,Kpp1Oft9Clw,YyAxHOGOkZU,yHLfhZU9pMw,LUE5e8xDRDM,t84h_XKoR6M,nNjyQgTEXaM,f95eLukESvA,qjYaekbXQJ4,Qv_shku2Rx0,EXFaXuC9xp8,Onk9ngTpWrc,GxcmW98i7PI,V7oiaN9LutI,935pdDuB7QQ,qWkjp2e4_mQ,e6HdejWlItY,j7guBvAFqGY,-PvMcIDHNDU,TQVfnorwlQ8,lU8THPych5I,vghX2W6PBWk,lV8hJOuQcF0,Y_IVgCJf3e4",
    "beee-unit3": "http://www.youtube.com/watch_videos?video_ids=v6RZcI1CrCg,Z6-e4S0wT9M,VaVOmLKCZ3c,e2_p5Rc17RQ,0GHkAVJra-E,KT79mFUBM1g,igZ4e8mnLCw,_MPecW_KRVY,SDmEKXaqra8,B_XW4FIGI-E,CBLtcUQuhcQ,eWzurAUESoU,R1UlN7JyGeQ,dkm55EqxzT0,TyuI-IqNfHg,6E19al9dEno,TnB_qv3pmWw,x7YOmgat2O0,S9aRRIVS1ec,MYzjWG9DNqk,oz8sRnnO5Q4,0lnOwAjsTwY,SdWM_jSu0PY,HO0-p9z5yuI,ZWRbU_nTMgA,qGVSXFdMiwY,TQdzwioK7rc,nQNmy1cPxHI,5ljmD7kHQuI,y4SiF9QSDs0,HLUpbW3C8C8,7MUUXkFu6m4,TRQ9Mb4U-Xo,PYrCkvJ8thk",
    "beee-unit4": "http://www.youtube.com/watch_videos?video_ids=icrAf1us2IQ,u_8b4GAUWCg,7ITiehTTh-o,W_4rBZdd41Q,b4PBAKXHzM0,qVwEVXf3CBQ,4T8FR4uYbqs,gYxH-D9Det8,8FAaLGxM98U,OyENxMAVL_k,DBw2sNphRME,97u-Jrab9Ck,dc2U_gjV81A,ZpTQAZbu-44,wfc5PYw-IbM,w-fHJou73-Y,J2RpY4TFPR8,uN5_SfBJYqs,08jcU8rb9SU,tPE26DO3cDw,RoN-sXrFXZI,bUx-9zu4syM,_ayby0owDWg,ouVd3urrQxs,QBbvca5Az_s,4RA7oOtNipw,E-CmyN8nD1Y,1YalqxRJUAI,fAn6hOKrjeA,TysNq8Gww5s,VjVbWg9IdkI,Aja8_2rlDt8,SFhexy3emhE,PB4Jdz17oXM,DYLuJ9n_8Vs,BZLOGi3t740,fEqKZKo-Jz0,AaOUzCcgTKs,34E5KFvE_bk,HBzr-KknEKM,0cWNum1xLSE,7axAQhVdGdI,Fn-BY14YbwU,rca7etnQrvo,dpmYQkaSuvQ,w4uWTfnxzOA,8ni1HZgJmD0,Od8FcNLn5y4,3525zSi36Ls,MAXEBfqZeVM,CX_8GGWf_1I,Vo-EK4JKRnk,UqxFSYTQC5o,RAYUdQ2NAiw,dRBsqZ2QYxY,djVlD6DNTcA,pd79hGW5ixI,5mimDymf0g0,YR6wMQquFR4,I3ydCEftQb4,X4_8dh-J4ik",
    "beee-unit5": "http://www.youtube.com/watch_videos?video_ids=IzVvMyVBxgo,eCU_xCmuePA,ipRXxVy8dKE,FsRvxa1JpAA,_0j0gNyUBmc,RyRJy7v7MmE,noh6TrLtNHA,InfQHRSFJEg,XrzvIUR0fxg,i_hyyxM9ad4,3R6S41W47vQ,rxMZPTF4LLI,MTXH9po9hiI,pyQI3k5Ycwc,1YP__NYQ-8k,p4yyAXnKDg4,XcKb8yJjCCE,ikLhqUCQKkc,nuDgVYsRlY4,eoUCyfjkMXc,M5hP-EQ5GoM,CzQcjKlsL7s,NJxyP4F7Og0,8GSMgVmlQy0,Y6S9IS3Wp3E,W6TmzSDGVYM,BFeNJT-YFiA,l6z9zDkDaO0,BP49K2ct5iI,sTgP2B40WMM,RZuIIUuGGE4,PWKIlNphBKE",
    "comm-unit1": "https://www.youtube.com/watch_videos?video_ids=wMb-CQSKLiA,YsfmppPxUoM,YZZ9B4o7pAg,UXAgP49U7gs,GaRAnZyzwm0,oS71uXVjp44,5Oi7q-kfCSI,kb3l4XpiiS0,1kSzzzLnIn4,2hc2fkwC8bg,6a7AIuXmmBA,dNOhAD3kcxc,BkbZwi8X-LI,Wpbd0I7jDKU,Cy7GOWAPHFQ,HWMkaofkPGc,rpM6F6jAyMU,KUN53bfRk2k",
    "comm-unit2": "https://www.youtube.com/watch_videos?video_ids=mYaVN68Vg2U,-qL-HosSo3g,i88mz6fqi6o,YHIqUPeJ4mg,SBJapcTAZo8,pHmHsBczEVE,dSEYGUvXLdI,yZdhcZ5e34I,afDVm0LvFTM,E24zrk40c0I,AnFWUBiZHWo,U0_aq_M8FfA,Rxq8qOYo4Cw,eNM9hfDD2lI,TSqW0STJxwM,MogxQzG_fJA,82VL_Uv5B-w,QLyU9P-qz4A",
    "comm-unit3": "https://www.youtube.com/watch_videos?video_ids=ApwcPHh76Xk,kNLiBgdryZk,WKUWcSG55ys,htDGPW6itVA,a74JSJCyKtg,3o3YU-Xx_po,Mbm9Qww5jBM,I6TZ-m_GPpA,E6aTAaWMZ3A,0SVIf3U4pUI,6_Ry4tpyYVU,gX5-2xGjtFE,P1EKNJrh_8c,-zEEFcteOgQ,7lHVleNYEpw,xavhPuObvK8,Nhe0_AcRsO8,9O7Uwb0Du60",
    "comm-unit4": "https://www.youtube.com/watch_videos?video_ids=VJcRYi-itoE,lO9cjRUtoJM,_Gfh60tgfgQ,FVaka51SHpY,BVClNPEWgrM,nqGtsPRsSus,ccANxAWCMkc,cNK8LSIeg4A,s4srWB7Z3Nk,mo1ZdoxY3pg,81sJQTb2Kw0,tnAEr3e0iE8,orhSdknMH48,FIDTGU49LYo,wL_AXcqI69U,F84FdBpDOWQ,v3UW2kXuLbU,CgPkVCJHHMI,6nh4CbGBb5o",
    "comm-unit5": "https://www.youtube.com/watch_videos?video_ids=yTEzMktUyYQ,1YArDoFhaf4,zfSycao_dBQ,MIkdmvk2WUE,loZMBgfs5xU",
    "it-unit1": "https://www.youtube.com/watch_videos?video_ids=e_Mhgi0jMzU,p8MjuQHNec8,k5YMLXPy1SE,zwovvWfkuSg,6e6yKtr2VGI,e69YYxID1fM,joWVGwnEiYw,Y4UBGVxwMt0,5Y3SjUNXBXc,KUxq0QhzisA,3gcpSVCTI6A,15-gumJfkrg,7ICf62fp_4I,qcEBXrqFLe8",
    "it-unit2": "https://www.youtube.com/watch_videos?video_ids=CrljtVWdXDk,xpy5NXiBFvA,MxjJqq3B6JU,4cjs2GrOf6Y,_pHTxlvwo24,2t2mQMcUNGo,0UVSPwzGw4U,5zhqYRiAr1k",
    "it-unit3": "https://www.youtube.com/watch_videos?video_ids=jPjimIJ-Mr8,PU9O3shK4wc,KMtaud07YEo,WJ-UaAaumNA,GqIOYjqHYg0,Ij71sDmmKpc,ENYFsXTaV2Y,9gseCS7ljuk,vunLndqc4rg",
    "it-unit4": "https://www.youtube.com/watch_videos?video_ids=4D55Cmj2t-A,WuQKlGaa9Bg,seG-aeL3LdA,n0iaPtsnmxQ,ixMDEDo97Mk,uDulBxDb7GM,7t0YJWTjmdI,mGTa4nld0I8,gLSn0OvJ-88,niuRPTgI4t4,EtIAZ6B8LDQ,HF_znV8x9a0,FmgIQBQ87fo,tOj8MSEIbfA,vhfRArT11jc,BZISxpdl4lQ,cFd0-D7oeh4,a5CgfS0Y4Uc",
    "it-unit5": "https://www.youtube.com/watch_videos?video_ids=peNkYXtjtKs,27_3ilfvlck,b4-ZZb_4Zr4,PR96L-gCQd8,tjpW45fOxp8,1SykPWpikjk,qzAHXO-cN5Q,jNJH6uD5LQE,kz184QIO4ZQ,UZio8TcTMrI,zUJLzMN0MlA,SSJW-CtmMwI,7EX7dMvOjWE,hF4nlOTfKcI,Xn8X48OLzUk,-4iIC5xsiGM",
    "ai-unit1": "https://www.youtube.com/watch_videos?video_ids=s-s9ilkMVj8,3qRJfUv7W_Y,K5IgvclblDg,BkedAnQfJ_U,n8z9HNV__OA,_guc2Gdnqys,KZFfbebQPAU,xKxh3fQwU8E,HsdiMkKnNLk,e-egxFtAF_4,LAkscQo_Cak,ijQb7vKJRm4",
    "ai-unit2": "https://www.youtube.com/watch_videos?video_ids=PLOtEiTjSt8,E5jVBqe59EE,qul0f79gxGs,f8luGFRtshY,w5Xawyfrf0s,jbw6nWFWxDk,0-vP781wblQ,5F9YzkpnaRw,gZpUcsB9TFc,xz1Nq6cZejI,3SiWtAnUROs,ct9rpyxbgaE,Ntu8nNBL28o,dEs_kbvu_0s,AgyCSmDVk5s,udOfKqeLVSg",
    "ai-unit3": "https://www.youtube.com/watch_videos?video_ids=9iN3O_oL2ac,6490tKrGEic,pkLcCto83u0,FpGeg27Ffk8,XYfTz5gziBk,Aw3EOSr64j0,62ssjzQdzIs,wgb9_BJhaT0,y2HQmvqXON4,5iHBv_74Ces,oaTtOblatKI",
    "ai-unit4": "https://www.youtube.com/watch_videos?video_ids=MIf5shIfsj8,oKko3ukFLVc,DVnubVOjZtg,xDyMuT9BliI,vof2vhfqoBo,o-2O4fmIu3E,N0BsxaRkMIU,6eKQnSf7atA",
    "ai-unit5": "https://www.youtube.com/watch_videos?video_ids=4dwsSz_fNSQ,zUQr6HAAKp4,O1nWXTXcCwI,mvveVcbHynE,5FpsGnkbEpM,EYeF2e2IKEo,rvxd13IHx1Y,bPpwZxasJo0,WRF2NeVwycA,o0GFC6c_k4g,y39OlGrVFD8,C78FeCxVCaY,RfuQ5B1sjfM,fRbIsoHbpy4,72DSH_B2DjE,QskN3ck7b2k",

    "eg-unit1": "https://www.youtube.com/watch_videos?video_ids=gp3oKSEnEFM,FQhGBy0-tYw,ZTGzclpnrqE,panq7Om1Qe0,tJlQBMbwkQY,Rx25aYh0IO8,aIdk7xwMQMg,CNY0RQ-cIHo,66R4esOwuAg,nxB9NA9b8hQ,JyGcGA27pkM,140VmaL6oDM,uR98eHyQAOY,zD0QgBEt6fA,jj7uFfaRh7g,95WENXU0LHs,DSaKdAO16eg,_WmUcMfvuWA,F7Uv3wnAa44,Sk3CXnYDxf4,SRadVWc2tFM,H5v5MzoT2H0,5zqbXgAae8k,WpoWfqcngzM,5PvDDXwhqSM,YM6m5UKxp_s,lL-5VzSLiYs,TMmxAHImTBw",
    "eg-unit2": "https://www.youtube.com/watch_videos?video_ids=FxEvYMjRGMk,j5nwO-JwVv4,7JpSSBVeSpI,L-_KNZSTueI,k16ggP94AvE,P5mmeEg9HA0,9rlA7YR98a0,DR-jerFKo_c,BzLb6AVEJdw,e25UM72eNkM,ZTGzclpnrqE,panq7Om1Qe0,tJlQBMbwkQY",
    "eg-unit3": "https://www.youtube.com/watch_videos?video_ids=FxEvYMjRGMk,j5nwO-JwVv4,7JpSSBVeSpI,AzFz8A5HgiQ,u-7rmrAcFb8,sn1Pow43NH0",
    "eg-unit4": "https://www.youtube.com/watch_videos?video_ids=Pv7M0B2aTkY,qCz47344cbA,nUe3TIJww7Q,ZTGzclpnrqE,perH0rRDGn0,ebAmD7JwfM8,panq7Om1Qe0,ui0WQpogoqs,WXLgv5okAc0,viNCXvO9bzY,TjJxy7jVSkU",
    "eg-unit5": "https://www.youtube.com/watch_videos?video_ids=j5nwO-JwVv4,7JpSSBVeSpI,u2CvMvwFXQw,5BTc32s6ntA,7sqtsZSq5bk,rQ8-Nv6lIiQ,ui0WQpogoqs,WXLgv5okAc0,viNCXvO9bzY,YL_2_j0Veok,8IPi7iHCyAs,pLcVmsxo2LE",

  };
  try {
    for (const [id, url] of Object.entries(links)) {
      await db.collection('shortlinks').doc(id).set({ longUrl: url, createdAt: new Date() }, { merge: true });
      console.log('Added ' + id);
    }
    console.log('BEE and Comm shortlinks fixed!');
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data: ", error);
    process.exit(1);
  }
}
seed();
