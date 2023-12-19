import { b } from './chunk-YMIPE5DI.js';
import { useEffectAsync, useMemoAsync } from '@chengsokdara/react-hooks-async';
import { useRef, useState, useEffect } from 'react';

var te={apiKey:"",autoStart:!1,autoTranscribe:!0,mode:"transcriptions",nonStop:!1,removeSilence:!1,stopTimeout:5e3,streaming:!1,timeSlice:1e3,onDataAvailable:void 0,onTranscribe:void 0},ne={stop:void 0},oe={blob:void 0,text:void 0},pe=M=>{let{apiKey:b$1,autoStart:C,autoTranscribe:W,mode:S,nonStop:O,removeSilence:ae,stopTimeout:P,streaming:U,timeSlice:se,whisperConfig:u,onDataAvailable:q,onTranscribe:d}={...te,...M};if(!b$1&&!d)throw new Error("apiKey is required if onTranscribe is not provided");let l=useRef([]),s=useRef(),i=useRef(),r=useRef(),o=useRef(),m=useRef(ne),[K,T]=useState(!1),[L,k]=useState(!1),w=useRef(!1),[I,R]=useState(!1),[$,g]=useState(oe),v=new AudioContext;useEffect(()=>()=>{l.current&&(l.current=[]),s.current&&(s.current.flush(),s.current=void 0),r.current&&(r.current.destroy(),r.current=void 0),y("stop"),i.current&&(i.current.off("speaking",A),i.current.off("stopped_speaking",x)),o.current&&(o.current.getTracks().forEach(e=>e.stop()),o.current=void 0);},[]),useEffectAsync(async()=>{C&&await B();},[C]);let j=async()=>{await B();},z=async()=>{await Q();},G=async()=>{await E();},B=async()=>{try{if(o.current||await J(),o.current){if(!r.current){let{default:{RecordRTCPromisesHandler:t,StereoAudioRecorder:a}}=await import('recordrtc'),n={mimeType:"audio/wav",numberOfAudioChannels:1,recorderType:a,sampleRate:v.sampleRate,type:"audio",ondataavailable:W&&U?Y:void 0};console.log("Setting up recorder with sample rate",v.sampleRate),r.current=new t(o.current,n);}if(!s.current){let{Mp3Encoder:t}=await import('lamejs');s.current=new t(1,v.sampleRate,96);}let e=await r.current.getState();(e==="inactive"||e==="stopped")&&await r.current.startRecording(),e==="paused"&&await r.current.resumeRecording(),T(!0);}}catch(e){console.error(e);}},J=async()=>{try{if(o.current&&o.current.getTracks().forEach(e=>e.stop()),o.current=await navigator.mediaDevices.getUserMedia({audio:!0}),!i.current){let{default:e}=await import('hark');i.current=e(o.current,{interval:100,play:!1}),i.current.on("speaking",A),i.current.on("stopped_speaking",x);}}catch(e){console.error(e);}},N=e=>{m.current[e]||(m.current[e]=setTimeout(E,P));},A=()=>{console.log("start speaking"),k(!0),w.current=!0,y("stop");},x=()=>{console.log("stop speaking"),k(!1),O&&w.current&&N("stop");},Q=async()=>{try{r.current&&(await r.current.getState()==="recording"&&await r.current.pauseRecording(),y("stop"),T(!1));}catch(e){console.error(e);}},E=async()=>{try{if(r.current){let e=await r.current.getState();if((e==="recording"||e==="paused")&&await r.current.stopRecording(),V(),y("stop"),T(!1),w.current=!1,W)await X();else {let t=await r.current.getBlob();g({blob:t});}await r.current.destroy(),l.current=[],s.current&&(s.current.flush(),s.current=void 0),r.current=void 0;}}catch(e){console.error(e);}},V=()=>{i.current&&(k(!1),i.current.off("speaking",A),i.current.off("stopped_speaking",x),i.current=void 0),o.current&&(o.current.getTracks().forEach(e=>e.stop()),o.current=void 0);},y=e=>{m.current[e]&&(clearTimeout(m.current[e]),m.current[e]=void 0);},X=async()=>{console.log("transcribing speech");try{if(s.current&&r.current&&await r.current.getState()==="stopped"){R(!0);let t=await r.current.getBlob(),a=await t.arrayBuffer();console.log({wav:a.byteLength});let n=s.current.encodeBuffer(new Int16Array(a)),c=new Blob([n],{type:"audio/mpeg"});if(console.log({blob:t,mp3:n.byteLength}),typeof d=="function"){let f=await d(t);console.log("onTranscribe",f),g(f);}else {let f=new File([c],"speech.wav",{type:"audio/wav"}),D=await H(f);console.log("onTranscribing",{text:D}),g({blob:t,text:D});}R(!1);}}catch(e){console.info(e),R(!1);}},Y=async e=>{console.log("onDataAvailable",e);try{if(U&&r.current){if(q?.(e),s.current){let a=await e.arrayBuffer(),n=s.current.encodeBuffer(new Int16Array(a)),c=new Blob([n],{type:"audio/mpeg"});l.current.push(c);}if(await r.current.getState()==="recording"){let a=new Blob(l.current,{type:"audio/mpeg"});if(typeof d=="function"){let n=await d(a);console.log("onTranscribe",n),n.text&&g(c=>({...c,text:n.text}));}else {let n=new File([a],"speech.mp3",{type:"audio/mpeg"}),c=await H(n);console.log("onTranscribing",{text:c}),c&&g(f=>({...f,text:c}));}}}}catch(t){console.error(t);}},H=useMemoAsync(async e=>{let t=new FormData;t.append("file",e),t.append("model","whisper-1"),S==="transcriptions"&&t.append("language",u?.language??"en"),u?.prompt&&t.append("prompt",u.prompt),u?.response_format&&t.append("response_format",u.response_format),u?.temperature&&t.append("temperature",`${u.temperature}`);let a={};a["Content-Type"]="multipart/form-data",b$1&&(a.Authorization=`Bearer ${b$1}`);let{default:n}=await import('axios');return (await n.post(b+S,t,{headers:a})).data.text},[b$1,S,u]);return {recording:K,speaking:L,spokeAtLeastOnce:w,transcribing:I,transcript:$,pauseRecording:z,startRecording:j,stopRecording:G}};

export { pe as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-SXGPRC2H.js.map