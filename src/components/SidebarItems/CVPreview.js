import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCvData} from '../../redux/slices/cvSlice';
import DownloadButton from './Downloadbutton';

const CVPreview = ({ applicantId }) => {
  const dispatch = useDispatch();
  const { cv, loading, error } = useSelector(state => state.cv);

  console.log('=== CV PREVIEW DEBUG ===');
  console.log('Received applicantId prop:', applicantId);
  console.log('CV state:', cv);
  console.log('Loading state:', loading);
  console.log('Error state:', error);

  useEffect(() => {
    if (applicantId) {
      console.log('Dispatching fetchCvData with ID:', applicantId);
      dispatch(fetchCvData(applicantId));
    } else {
      console.log('No applicantId provided to useEffect');
    }
  }, [dispatch, applicantId]);

  if (loading) return <p>Loading CV...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!cv) return <p>No CV data found.</p>;

  return (
    <div className="bg-white p-6 rounded shadow w-full">
      <h2 className="text-2xl font-bold mb-2">{cv.fullName}</h2>
      <p className="text-sm text-gray-600 mb-4">{cv.user?.email} | NIDA: {cv.nida}</p>

      <div className="space-y-3">
        <section>
          <h3 className="font-semibold text-lg mb-1">Academic Qualifications</h3>
          {cv.qualifications?.length > 0 ? (
            cv.qualifications.map(q => (
              <p key={q.id}>{q.level} in {q.fieldOfStudy} - {q.institution}</p>
            ))
          ) : (
            <p>No qualifications found</p>
          )}
        </section>

        <section>
          <h3 className="font-semibold text-lg mt-4 mb-1">Work Experience</h3>
          {cv.experiences?.length > 0 ? (
            cv.experiences.map(e => (
              <div key={e.id}>
                <p>{e.jobTitle} at {e.institution}</p>
                <p className="text-sm text-gray-500">{e.duties}</p>
              </div>
            ))
          ) : (
            <p>No work experience found</p>
          )}
        </section>

        <section>
          <h3 className="font-semibold text-lg mt-4 mb-1">Languages</h3>
          {cv.languages?.length > 0 ? (
            cv.languages.map(l => (
              <p key={l.id}>{l.language}: Speak - {l.speak}, Read - {l.read}, Write - {l.write}</p>
            ))
          ) : (
            <p>No languages found</p>
          )}
        </section>

        <section>
          <h3 className="font-semibold text-lg mt-4 mb-1">Computer Skills</h3>
          {cv.skills?.length > 0 ? (
            cv.skills.map(s => (
              <p key={s.id}>{s.skill} - {s.proficiency}</p>
            ))
          ) : (
            <p>No computer skills found</p>
          )}
        </section>

        <section>
          <h3 className="font-semibold text-lg mt-4 mb-1">Preferred Categories</h3>
          {cv.categories?.length > 0 ? (
            cv.categories.map(c => <p key={c.id}>{c.name}</p>)
          ) : (
            <p>No categories found</p>
          )}
        </section>
      </div>

      <div className="mt-6">
        <DownloadButton applicantId={applicantId} />
      </div>
    </div>
  );
};

export default CVPreview;